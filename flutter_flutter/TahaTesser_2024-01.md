# flutter/flutter Contributions - Jan, 2024

## Pull Requests

### 1. Fix `RangeSlider` throws a null-check error after `clearSemantics` is called

**Summary:** fixes [Null-check operator on RangeSlider's _startSemanticsNode](https://github.com/flutter/flutter/issues/141953)


## Pre-launch Checklist

- [x] I read the [Contributor Guide] and followed the process outlined there for submitting PRs.
- [x] I read the [Tree Hygiene] wiki page, which explains my responsibilities.
- [x] I read and followed the [Flutter Style Guide], including [Features we expect every widget to implement].
- [x] I signed the [CLA].
- [x] I listed at least one issue that this PR fixes in the description above.
- [ ] I updated/added relevant documentation (doc comments with `///`).
- [x] I added new tests to check the change I am making, or this PR is [test-exempt].
- [x] All existing and new tests are passing.

If you need help, consider asking for advice on the #hackers-new channel on [Discord].

<!-- Links -->
[Contributor Guide]: https://github.com/flutter/flutter/wiki/Tree-hygiene#overview
[Tree Hygiene]: https://github.com/flutter/flutter/wiki/Tree-hygiene
[test-exempt]: https://github.com/flutter/flutter/wiki/Tree-hygiene#tests
[Flutter Style Guide]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo
[Features we expect every widget to implement]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#features-we-expect-every-widget-to-implement
[CLA]: https://cla.developers.google.com/
[flutter/tests]: https://github.com/flutter/tests
[breaking change policy]: https://github.com/flutter/flutter/wiki/Tree-hygiene#handling-breaking-changes
[Discord]: https://github.com/flutter/flutter/wiki/Chat

Details:

- Author: TahaTesser
- Reviewers: None
- Link: https://github.com/flutter/flutter/pull/141965
- Files Changed:
  - Updated: packages/flutter/lib/src/material/range_slider.dart
  - Tests added: packages/flutter/test/material/range_slider_test.dart
- Line Diff: 42

---

### 2. Update `ToggleButtons`, `ExpansionPanel`, and `ExpandIcon` tests for Material 3

**Summary:** Updated unit tests for `ToggleButtons`, `ExpansionPanel`, and `ExpandIcon` to have M2 and M3 versions.

More info in #139076

## Pre-launch Checklist

- [x] I read the [Contributor Guide] and followed the process outlined there for submitting PRs.
- [x] I read the [Tree Hygiene] wiki page, which explains my responsibilities.
- [x] I read and followed the [Flutter Style Guide], including [Features we expect every widget to implement].
- [x] I signed the [CLA].
- [x] I listed at least one issue that this PR fixes in the description above.
- [ ] I updated/added relevant documentation (doc comments with `///`).
- [x] I added new tests to check the change I am making, or this PR is [test-exempt].
- [x] All existing and new tests are passing.

If you need help, consider asking for advice on the #hackers-new channel on [Discord].

<!-- Links -->
[Contributor Guide]: https://github.com/flutter/flutter/wiki/Tree-hygiene#overview
[Tree Hygiene]: https://github.com/flutter/flutter/wiki/Tree-hygiene
[test-exempt]: https://github.com/flutter/flutter/wiki/Tree-hygiene#tests
[Flutter Style Guide]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo
[Features we expect every widget to implement]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#features-we-expect-every-widget-to-implement
[CLA]: https://cla.developers.google.com/
[flutter/tests]: https://github.com/flutter/tests
[breaking change policy]: https://github.com/flutter/flutter/wiki/Tree-hygiene#handling-breaking-changes
[Discord]: https://github.com/flutter/flutter/wiki/Chat

Details:

- Author: TahaTesser
- Reviewers: None
- Link: https://github.com/flutter/flutter/pull/141868
- Files Changed:
  - Tests added: packages/flutter/test/material/expand_icon_test.dart
  - Tests added: packages/flutter/test/material/expansion_panel_test.dart
  - Tests added: packages/flutter/test/material/toggle_buttons_test.dart
- Line Diff: 441

---

### 3. Fix `shape` and `collapsedShape` isn't applied to `ExpansionTile`'s splash ink

**Summary:** This updates the previous attempt https://github.com/flutter/flutter/pull/135855 and removes the complications when testing M3 ink sparkle effect. 
Thanks to this [PR](https://github.com/flutter/flutter/pull/138757) by @Piinks 


fixes [ExpansionTile InkSplash doesn't respect Shape's borderRadius](https://github.com/flutter/flutter/issues/125779)
fixes [`ExpansionTile.backgroundColor` &  `ExpansionTile.collapsedBackgroundColor` removes splash effect](https://github.com/flutter/flutter/issues/107113)

### Code sample

<details>
<summary>expand to view the code sample</summary> 

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Example(),
    );
  }
}

class Example extends StatelessWidget {
  const Example({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
          child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 24.0),
        child: ExpansionTile(
          collapsedBackgroundColor: Color(0x25ff0000),
          backgroundColor: Color(0x250000ff),
          collapsedShape: RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(30.0)),
            side: BorderSide(color: Colors.black, width: 2.0),
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(30.0)),
            side: BorderSide(color: Colors.black, width: 2.0),
          ),
          clipBehavior: Clip.hardEdge,
          title: Text('Expansion Tile'),
          children: <Widget>[
            FlutterLogo(size: 50),
            FlutterLogo(size: 50),
            FlutterLogo(size: 50),
            FlutterLogo(size: 50),

          ],
        ),
      )),
    );
  }
}
```

</details>

### Before

<img width="789" alt="Screenshot 2024-01-18 at 18 16 15" src="https://github.com/flutter/flutter/assets/48603081/8c6a6f1e-6986-4acf-8dec-e223a682c0d7">

<img width="789" alt="Screenshot 2024-01-18 at 18 16 44" src="https://github.com/flutter/flutter/assets/48603081/f55f6a26-2128-48a1-b24d-3c14e4f6ecdc">

### After 
<img width="789" alt="Screenshot 2024-01-18 at 18 20 27" src="https://github.com/flutter/flutter/assets/48603081/7ec8b888-7319-460d-8488-9cd44c9246a6">

<img width="789" alt="Screenshot 2024-01-18 at 18 20 53" src="https://github.com/flutter/flutter/assets/48603081/80d66d5b-7eb2-4f47-ab4d-d7f469a731fa">

## Pre-launch Checklist

- [x] I read the [Contributor Guide] and followed the process outlined there for submitting PRs.
- [x] I read the [Tree Hygiene] wiki page, which explains my responsibilities.
- [x] I read and followed the [Flutter Style Guide], including [Features we expect every widget to implement].
- [x] I signed the [CLA].
- [x] I listed at least one issue that this PR fixes in the description above.
- [x] I updated/added relevant documentation (doc comments with `///`).
- [x] I added new tests to check the change I am making, or this PR is [test-exempt].
- [x] All existing and new tests are passing.

If you need help, consider asking for advice on the #hackers-new channel on [Discord].

<!-- Links -->
[Contributor Guide]: https://github.com/flutter/flutter/wiki/Tree-hygiene#overview
[Tree Hygiene]: https://github.com/flutter/flutter/wiki/Tree-hygiene
[test-exempt]: https://github.com/flutter/flutter/wiki/Tree-hygiene#tests
[Flutter Style Guide]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo
[Features we expect every widget to implement]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#features-we-expect-every-widget-to-implement
[CLA]: https://cla.developers.google.com/
[flutter/tests]: https://github.com/flutter/tests
[breaking change policy]: https://github.com/flutter/flutter/wiki/Tree-hygiene#handling-breaking-changes
[Discord]: https://github.com/flutter/flutter/wiki/Chat

Details:

- Author: TahaTesser
- Reviewers: Piinks
- Link: https://github.com/flutter/flutter/pull/141777
- Files Changed:
  - Updated: packages/flutter/lib/src/material/expansion_tile.dart
  - Tests added: packages/flutter/test/material/expansion_tile_test.dart
  - Tests added: packages/flutter/test/material/expansion_tile_theme_test.dart
- Line Diff: 374

---

### 4. Fix "Delete" tooltip is shown disabled on chips with `onDeleted` callback

**Summary:** fixes [Disabled chips with `onDeleted` callback shows "Delete" tooltip on hover](https://github.com/flutter/flutter/issues/141336)

### Code sample

<details>
<summary>expand to view the code sample</summary> 

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Example(),
    );
  }
}

class Example extends StatefulWidget {
  const Example({super.key});

  @override
  State<Example> createState() => _ExampleState();
}

class _ExampleState extends State<Example> {
  bool _isEnable = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            RawChip(
              label: const Text('RawChip'),
              onPressed: () {},
              isEnabled: _isEnable,
              onDeleted: () {},
            ),
            FilterChip(
              label: const Text('FilterChip'),
              selected: false,
              onSelected: _isEnable ? (bool value) {} : null,
              onDeleted: () {},
            ),
            InputChip(
              label: const Text('InputChip'),
              isEnabled: _isEnable,
              onDeleted: () {},
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          setState(() {
            _isEnable = !_isEnable;
          });
        },
        label: Text(_isEnable ? 'Disable' : 'Enable'),
      ),
    );
  }
}
```

</details>

### Preview

| Before | After |
| --------------- | --------------- |
| <img src="https://github.com/flutter/flutter/assets/48603081/f80ae5f7-0a6d-4041-ade3-cbc2b5c78188" height="450" /> | <img src="https://github.com/flutter/flutter/assets/48603081/04e62854-e3f1-4b65-9753-183d288f3cfe" height="450" /> |



## Pre-launch Checklist

- [x] I read the [Contributor Guide] and followed the process outlined there for submitting PRs.
- [x] I read the [Tree Hygiene] wiki page, which explains my responsibilities.
- [x] I read and followed the [Flutter Style Guide], including [Features we expect every widget to implement].
- [x] I signed the [CLA].
- [x] I listed at least one issue that this PR fixes in the description above.
- [x] I updated/added relevant documentation (doc comments with `///`).
- [x] I added new tests to check the change I am making, or this PR is [test-exempt].
- [x] All existing and new tests are passing.

If you need help, consider asking for advice on the #hackers-new channel on [Discord].

<!-- Links -->
[Contributor Guide]: https://github.com/flutter/flutter/wiki/Tree-hygiene#overview
[Tree Hygiene]: https://github.com/flutter/flutter/wiki/Tree-hygiene
[test-exempt]: https://github.com/flutter/flutter/wiki/Tree-hygiene#tests
[Flutter Style Guide]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo
[Features we expect every widget to implement]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#features-we-expect-every-widget-to-implement
[CLA]: https://cla.developers.google.com/
[flutter/tests]: https://github.com/flutter/tests
[breaking change policy]: https://github.com/flutter/flutter/wiki/Tree-hygiene#handling-breaking-changes
[Discord]: https://github.com/flutter/flutter/wiki/Chat

Details:

- Author: TahaTesser
- Reviewers: None
- Link: https://github.com/flutter/flutter/pull/141770
- Files Changed:
  - Updated: packages/flutter/lib/src/material/chip.dart
  - Tests added: packages/flutter/test/material/chip_test.dart
  - Tests added: packages/flutter/test/material/filter_chip_test.dart
  - Tests added: packages/flutter/test/material/input_chip_test.dart
- Line Diff: 118

---

### 5. Fix `ListWheelScrollView` in an `AnimatedContainer` with zero height throw an error

**Summary:** fixes [`ListWheelScrollView` Throws Unexpected Error Inside `AnimatedContainer`](https://github.com/flutter/flutter/issues/140780)
fixes [`CupertinoDatePicker` throw exception when parent height is 0](https://github.com/flutter/flutter/issues/55630)

### Code sample

<details>
<summary>expand to view the code sample</summary> 

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: AnimatedContainer(
          height: 0,
          duration: Duration.zero,
          child: ListWheelScrollView(
            itemExtent: 20.0,
            children: <Widget>[
              for (int i = 0; i < 20; i++) Container(),
            ],
          ),
        ),
      ),
    );
  }
}
```

</details>

## Pre-launch Checklist

- [x] I read the [Contributor Guide] and followed the process outlined there for submitting PRs.
- [x] I read the [Tree Hygiene] wiki page, which explains my responsibilities.
- [x] I read and followed the [Flutter Style Guide], including [Features we expect every widget to implement].
- [x] I signed the [CLA].
- [x] I listed at least one issue that this PR fixes in the description above.
- [ ] I updated/added relevant documentation (doc comments with `///`).
- [x] I added new tests to check the change I am making, or this PR is [test-exempt].
- [x] All existing and new tests are passing.

If you need help, consider asking for advice on the #hackers-new channel on [Discord].

<!-- Links -->
[Contributor Guide]: https://github.com/flutter/flutter/wiki/Tree-hygiene#overview
[Tree Hygiene]: https://github.com/flutter/flutter/wiki/Tree-hygiene
[test-exempt]: https://github.com/flutter/flutter/wiki/Tree-hygiene#tests
[Flutter Style Guide]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo
[Features we expect every widget to implement]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#features-we-expect-every-widget-to-implement
[CLA]: https://cla.developers.google.com/
[flutter/tests]: https://github.com/flutter/tests
[breaking change policy]: https://github.com/flutter/flutter/wiki/Tree-hygiene#handling-breaking-changes
[Discord]: https://github.com/flutter/flutter/wiki/Chat

Details:

- Author: TahaTesser
- Reviewers: None
- Link: https://github.com/flutter/flutter/pull/141372
- Files Changed:
  - Updated: packages/flutter/lib/src/rendering/list_wheel_viewport.dart
  - Tests added: packages/flutter/test/widgets/list_wheel_scroll_view_test.dart
- Line Diff: 28

---

### 6. Update `RouteObserver` example and fix an error thrown

**Summary:** This updates the `RouteObserver` example from snippet to Dartpad example and fixes the error when running the code snippet

Details:

- Author: TahaTesser
- Reviewers: None
- Link: https://github.com/flutter/flutter/pull/141166
- Files Changed:
  - Updated: examples/api/lib/widgets/routes/route_observer.0.dart
  - Tests added: examples/api/test/widgets/routes/route_observer.0_test.dart
  - Updated: packages/flutter/lib/src/widgets/routes.dart
- Line Diff: 221

---

### 7. Update  Chips and `ChipTheme` tests and  for Material 3

**Summary:** Updated unit tests for `Tooltip` to have M2 and M3 versions.

More info in #139076

## Pre-launch Checklist

- [x] I read the [Contributor Guide] and followed the process outlined there for submitting PRs.
- [x] I read the [Tree Hygiene] wiki page, which explains my responsibilities.
- [x] I read and followed the [Flutter Style Guide], including [Features we expect every widget to implement].
- [x] I signed the [CLA].
- [x] I listed at least one issue that this PR fixes in the description above.
- [ ] I updated/added relevant documentation (doc comments with `///`).
- [x] I added new tests to check the change I am making, or this PR is [test-exempt].
- [x] All existing and new tests are passing.

If you need help, consider asking for advice on the #hackers-new channel on [Discord].

<!-- Links -->
[Contributor Guide]: https://github.com/flutter/flutter/wiki/Tree-hygiene#overview
[Tree Hygiene]: https://github.com/flutter/flutter/wiki/Tree-hygiene
[test-exempt]: https://github.com/flutter/flutter/wiki/Tree-hygiene#tests
[Flutter Style Guide]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo
[Features we expect every widget to implement]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#features-we-expect-every-widget-to-implement
[CLA]: https://cla.developers.google.com/
[flutter/tests]: https://github.com/flutter/tests
[breaking change policy]: https://github.com/flutter/flutter/wiki/Tree-hygiene#handling-breaking-changes
[Discord]: https://github.com/flutter/flutter/wiki/Chat

Details:

- Author: TahaTesser
- Reviewers: None
- Link: https://github.com/flutter/flutter/pull/141022
- Files Changed:
  - Tests added: packages/flutter/test/material/action_chip_test.dart
  - Tests added: packages/flutter/test/material/chip_theme_test.dart
  - Tests added: packages/flutter/test/material/choice_chip_test.dart
  - Tests added: packages/flutter/test/material/filter_chip_test.dart
  - Tests added: packages/flutter/test/material/input_chip_test.dart
- Line Diff: 608

---

### 8. Update `chip_test.dart` tests for Material 3

**Summary:** Updated unit tests for `Tooltip` to have M2 and M3 versions.

More info in #139076

## Pre-launch Checklist

- [x] I read the [Contributor Guide] and followed the process outlined there for submitting PRs.
- [x] I read the [Tree Hygiene] wiki page, which explains my responsibilities.
- [x] I read and followed the [Flutter Style Guide], including [Features we expect every widget to implement].
- [x] I signed the [CLA].
- [x] I listed at least one issue that this PR fixes in the description above.
- [ ] I updated/added relevant documentation (doc comments with `///`).
- [x] I added new tests to check the change I am making, or this PR is [test-exempt].
- [x] All existing and new tests are passing.

If you need help, consider asking for advice on the #hackers-new channel on [Discord].

<!-- Links -->
[Contributor Guide]: https://github.com/flutter/flutter/wiki/Tree-hygiene#overview
[Tree Hygiene]: https://github.com/flutter/flutter/wiki/Tree-hygiene
[test-exempt]: https://github.com/flutter/flutter/wiki/Tree-hygiene#tests
[Flutter Style Guide]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo
[Features we expect every widget to implement]: https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#features-we-expect-every-widget-to-implement
[CLA]: https://cla.developers.google.com/
[flutter/tests]: https://github.com/flutter/tests
[breaking change policy]: https://github.com/flutter/flutter/wiki/Tree-hygiene#handling-breaking-changes
[Discord]: https://github.com/flutter/flutter/wiki/Chat

Details:

- Author: TahaTesser
- Reviewers: None
- Link: https://github.com/flutter/flutter/pull/140964
- Files Changed:
  - Tests added: packages/flutter/test/material/chip_test.dart
- Line Diff: 1721

---

### 9. Fix scrollable `TabBar` expands to full width when the divider is removed

**Summary:** Fixes the scrollable `TabBar` width when the divider is removed. (when the divider height is set to `0` or divider color is set to `Colors.transparent`)

Details:

- Author: TahaTesser
- Reviewers: None
- Link: https://github.com/flutter/flutter/pull/140963
- Files Changed:
  - Updated: packages/flutter/lib/src/material/tabs.dart
  - Tests added: packages/flutter/test/material/tabs_test.dart
- Line Diff: 120

---

### 10. Fix `FlexibleSpaceBar` centered title position and title color

**Summary:** - fixes the `FlexibleSpaceBar` centered title position when there is a leading widget.
 - fixes the `FlexibleSpaceBar` title color for Material 3.
 - Added documentation when using a long `FlexibleSpaceBar` title and update its test.
 - Improved documentation of default title padding.

Details:

- Author: TahaTesser
- Reviewers: None
- Link: https://github.com/flutter/flutter/pull/140883
- Files Changed:
  - Updated: packages/flutter/lib/src/material/flexible_space_bar.dart
  - Tests added: packages/flutter/test/material/flexible_space_bar_test.dart
- Line Diff: 121

---

## Summary Statistics

- Total PRs: 10
- Total Files Modified: 24
- Total Line Changes: 3794
