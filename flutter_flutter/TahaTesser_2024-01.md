# flutter/flutter Updates - 2024-01

Welcome to the 2024-01 update for flutter/flutter! This document summarizes all pull requests created during this period.

## Pull Requests Overview

### Fix `RangeSlider` throws a null-check error after `clearSemantics` is called

#### Pull Request Details

- **PR Link**: [#141965](https://github.com/flutter/flutter/pull/141965)
- **Created**: 1/22/2024
- **Status**: Merged on 1/22/2024
- **Author**: TahaTesser

#### Changes

- **Modified Files**:
  - `packages/flutter/lib/src/material/range_slider.dart`
  - `packages/flutter/test/material/range_slider_test.dart`
- **Total Line Changes**: 42

---

### Update `ToggleButtons`, `ExpansionPanel`, and `ExpandIcon` tests for Material 3

#### Pull Request Details

- **PR Link**: [#141868](https://github.com/flutter/flutter/pull/141868)
- **Created**: 1/19/2024
- **Status**: Merged on 1/22/2024
- **Author**: TahaTesser

#### Changes

- **Modified Files**:
  - `packages/flutter/test/material/expand_icon_test.dart`
  - `packages/flutter/test/material/expansion_panel_test.dart`
  - `packages/flutter/test/material/toggle_buttons_test.dart`
- **Total Line Changes**: 441

---

### Fix `shape` and `collapsedShape` isn't applied to `ExpansionTile`'s splash ink

#### Pull Request Details

- **PR Link**: [#141777](https://github.com/flutter/flutter/pull/141777)
- **Created**: 1/18/2024
- **Status**: Merged on 1/22/2024
- **Author**: TahaTesser
- **Reviewers**: Piinks

#### Changes

- **Modified Files**:
  - `packages/flutter/lib/src/material/expansion_tile.dart`
  - `packages/flutter/test/material/expansion_tile_test.dart`
  - `packages/flutter/test/material/expansion_tile_theme_test.dart`
- **Total Line Changes**: 374

---

### Fix "Delete" tooltip is shown disabled on chips with `onDeleted` callback

#### Pull Request Details

- **PR Link**: [#141770](https://github.com/flutter/flutter/pull/141770)
- **Created**: 1/18/2024
- **Status**: Merged on 1/19/2024
- **Author**: TahaTesser

#### Changes

- **Modified Files**:
  - `packages/flutter/lib/src/material/chip.dart`
  - `packages/flutter/test/material/chip_test.dart`
  - `packages/flutter/test/material/filter_chip_test.dart`
  - `packages/flutter/test/material/input_chip_test.dart`
- **Total Line Changes**: 118

---

### Fix `ListWheelScrollView` in an `AnimatedContainer` with zero height throw an error

#### Pull Request Details

- **PR Link**: [#141372](https://github.com/flutter/flutter/pull/141372)
- **Created**: 1/11/2024
- **Status**: Merged on 1/11/2024
- **Author**: TahaTesser

#### Changes

- **Modified Files**:
  - `packages/flutter/lib/src/rendering/list_wheel_viewport.dart`
  - `packages/flutter/test/widgets/list_wheel_scroll_view_test.dart`
- **Total Line Changes**: 28

---

### Update `RouteObserver` example and fix an error thrown

#### Pull Request Details

- **PR Link**: [#141166](https://github.com/flutter/flutter/pull/141166)
- **Created**: 1/9/2024
- **Status**: Merged on 1/9/2024
- **Author**: TahaTesser

#### Changes

- **Modified Files**:
  - `examples/api/lib/widgets/routes/route_observer.0.dart`
  - `examples/api/test/widgets/routes/route_observer.0_test.dart`
  - `packages/flutter/lib/src/widgets/routes.dart`
- **Total Line Changes**: 221

---

### Update  Chips and `ChipTheme` tests and  for Material 3

#### Pull Request Details

- **PR Link**: [#141022](https://github.com/flutter/flutter/pull/141022)
- **Created**: 1/5/2024
- **Status**: Merged on 1/9/2024
- **Author**: TahaTesser

#### Changes

- **Modified Files**:
  - `packages/flutter/test/material/action_chip_test.dart`
  - `packages/flutter/test/material/chip_theme_test.dart`
  - `packages/flutter/test/material/choice_chip_test.dart`
  - `packages/flutter/test/material/filter_chip_test.dart`
  - `packages/flutter/test/material/input_chip_test.dart`
- **Total Line Changes**: 608

---

### Update `chip_test.dart` tests for Material 3

#### Pull Request Details

- **PR Link**: [#140964](https://github.com/flutter/flutter/pull/140964)
- **Created**: 1/4/2024
- **Status**: Merged on 1/9/2024
- **Author**: TahaTesser

#### Changes

- **Modified Files**:
  - `packages/flutter/test/material/chip_test.dart`
- **Total Line Changes**: 1721

---

### Fix scrollable `TabBar` expands to full width when the divider is removed

#### Pull Request Details

- **PR Link**: [#140963](https://github.com/flutter/flutter/pull/140963)
- **Created**: 1/4/2024
- **Status**: Merged on 1/5/2024
- **Author**: TahaTesser

#### Changes

- **Modified Files**:
  - `packages/flutter/lib/src/material/tabs.dart`
  - `packages/flutter/test/material/tabs_test.dart`
- **Total Line Changes**: 120

---

### Fix `FlexibleSpaceBar` centered title position and title color

#### Pull Request Details

- **PR Link**: [#140883](https://github.com/flutter/flutter/pull/140883)
- **Created**: 1/3/2024
- **Status**: Merged on 1/12/2024
- **Author**: TahaTesser

#### Changes

- **Modified Files**:
  - `packages/flutter/lib/src/material/flexible_space_bar.dart`
  - `packages/flutter/test/material/flexible_space_bar_test.dart`
- **Total Line Changes**: 121

---

## Summary Statistics

- Total PRs: 10
- Total Files Modified: 24
- Total Line Changes: 3794
