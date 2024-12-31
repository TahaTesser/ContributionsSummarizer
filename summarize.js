import { Octokit } from "@octokit/rest";
import fetch from "node-fetch";
import fs from "fs";
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const username = process.env.INPUT_USERNAME;
const repoInput = process.env.INPUT_REPO;
const [owner, repo] = repoInput.split("/");
const monthStr = process.env.INPUT_MONTH;

function getLastDayOfMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

const [yyyy, mm] = monthStr.split("-");
const year = parseInt(yyyy, 10);
const month = parseInt(mm, 10);
const lastDay = getLastDayOfMonth(year, month);
const startDate = `${monthStr}-01T00:00:00Z`;
const endDate = `${monthStr}-${lastDay}T23:59:59Z`;

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  request: {
    fetch: fetch
  }
});

const query = `repo:${owner}/${repo} author:${username} type:pr created:${startDate}..${endDate}`;

async function fetchPRs() {
  let results = [];
  let page = 1;
  const perPage = 50;

  while (true) {
    const response = await octokit.search.issuesAndPullRequests({
      q: query,
      per_page: perPage,
      page
    });

    results = results.concat(response.data.items);

    if (response.data.items.length < perPage) {
      break;
    }
    page++;
  }

  return results;
}

async function summarizeWithClaude(prBody) {
  if (!prBody) return '';
  
  // Remove Pre-launch Checklist and anything after it
  const cleanedBody = prBody.split(/## Pre-launch Checklist|## Pre-Landing Checklist/)[0].trim();
  
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 4000,
        messages: [{
          role: 'user',
          content: `Summarize the following pull request description in 3-5 lines:\n\n${cleanedBody}`
        }]
      })
    });

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.warn('Failed to get AI summary:', error);
    return '';
  }
}

async function fetchPRDetails(prNumber) {
  const prResponse = await octokit.pulls.get({
    owner,
    repo,
    pull_number: prNumber
  });
  const prData = prResponse.data;

  const filesResponse = await octokit.pulls.listFiles({
    owner,
    repo,
    pull_number: prNumber,
    per_page: 100
  });
  const files = filesResponse.data;

  const fileDetails = files.map(f => f.filename);
  const lineDiff = files.reduce((acc, f) => acc + f.additions + f.deletions, 0);

  let summary = await summarizeWithClaude(prData.body);
  if (!summary) {
    if (prData.body) {
      const descMatch = prData.body.match(/## Description\s*([\s\S]*?)(?=##|$)/);
      if (descMatch) {
        summary = descMatch[1].trim();
      } else {
        summary = prData.body.split('\n\n')[0].trim();
      }
    }
  }

  return {
    createdAt: prData.created_at,
    mergedAt: prData.merged_at,
    author: prData.user.login,
    reviewers: prData.requested_reviewers.map(r => r.login),
    fileDetails,
    lineDiff,
    summary
  };
}

async function main() {
  const prItems = await fetchPRs();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthInText = `${months[month-1]}, ${year}`;
  
  let mdContent = '# ' + repoInput + ' Contributions - ' + monthInText + '\n\n'
    + '## Pull Requests\n\n';

  let allFileDetails = [];
  let totalLineChanges = 0;

  for (const item of prItems) {
    const prNumber = item.number;
    const prHtmlUrl = item.html_url;
    const prTitle = item.title;
    const details = await fetchPRDetails(prNumber);

    mdContent += '### ' + (prItems.indexOf(item) + 1) + '. ' + prTitle + '\n\n';
    
    // Add PR summary if available
    if (details.summary) {
      mdContent += '**Summary:** ' + details.summary + '\n\n';
    }
    
    mdContent += 'Details:\n\n';
    mdContent += '- Author: ' + details.author + '\n';
    
    if (details.reviewers.length > 0) {
      mdContent += '- Reviewers: ' + details.reviewers.join(', ') + '\n';
    } else {
      mdContent += '- Reviewers: None\n';
    }

    mdContent += '- Link: ' + prHtmlUrl + '\n';
    
    mdContent += '- Files Changed:\n';
    details.fileDetails.forEach((f) => {
      if (f.endsWith('_test.dart')) {
        mdContent += '  - Tests added: ' + f + '\n';
      } else {
        mdContent += '  - Updated: ' + f + '\n';
      }
    });
    
    mdContent += '- Line Diff: ' + details.lineDiff + '\n\n';
    mdContent += '---\n\n';

    allFileDetails = allFileDetails.concat(details.fileDetails);
    totalLineChanges += details.lineDiff;
  }

  mdContent += '## Summary Statistics\n\n';
  mdContent += '- Total PRs: ' + prItems.length + '\n';
  const uniqueFiles = new Set(allFileDetails);
  mdContent += '- Total Files Modified: ' + uniqueFiles.size + '\n';
  mdContent += '- Total Line Changes: ' + totalLineChanges + '\n';

  const repoDir = repoInput.replace('/', '_');
  if (!fs.existsSync(repoDir)) {
    fs.mkdirSync(repoDir, { recursive: true });
  }

  const outputFilename = `${repoDir}/${username}_${monthStr}.md`;
  fs.writeFileSync(outputFilename, mdContent);
  console.log(`Created summary file: ${outputFilename}`);

  // Add git operations to commit the file
  try {
    await execAsync('git config --global user.email "github-actions[bot]@users.noreply.github.com"');
    await execAsync('git config --global user.name "github-actions[bot]"');
    await execAsync(`git add ${outputFilename}`);
    await execAsync(`git commit -m "Add PR summary for ${username} - ${monthStr}"`);
    await execAsync('git push');
    console.log('Successfully committed and pushed the summary file');
  } catch (error) {
    console.error('Error committing the file:', error);
    throw error;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
