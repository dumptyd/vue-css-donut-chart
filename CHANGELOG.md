# Changelog

All notable changes to this project will be documented in this file.

## [1.3.0]

### Added
- `auto-adjust-text-size` prop is here! The prop can be set to `false` to disable the font size recalculation behavior.

### Other changes

- Demo page now has an option to test `auto-adjust-text-size` prop.

## [1.2.0]

### Added

- Adds the following new events (#26)
  - `section-mouseenter`
  - `section-mouseleave`
  - `section-mouseover`
  - `section-mouseout`
  - `section-mousemove`
- All the `section-*` events are now emitted with the native `Event` object as the second parameter.

### Fixed

- A floating-point arithmetic issue was causing the section rendering logic to behave in unexpected ways. This has been fixed. (#23)
- Another floating-point arithmetic issue was causing the `total` prop's validator to incorrectly flag valid values. This has been fixed as well. (#24)

### Other changes

- Demo page now has a section dedicated for testing all the exposed events.
- Documentation has been updated with new events.

## [1.1.6]
## [1.1.5]

- Minor alignment change in documentation so it doesn't look awkward on npm. npm has a bug where it doesn't center align some things.

## [1.1.4]

### Fixed

- `section-click` is now emitted with the original `section` object that's passed to the component. Earlier, it was being emitted with the internal `section` object which is an extended version of the original one.

### Other changes

- The component now has tests and a very high coverage. Check out the README to see the coverage info.
- The project now has automated checks for broken tests and linter errors.
- Minor refactoring.
- Readme has been revamped with better formatting.

## [1.1.3]

### Fixed

- 1.1.2 broke the usage of `%` unit (#10). That's fixed now.
- Font size is now recalculated only when the chart has rendered.


## [1.1.2]

### Added

- Created a CHANGELOG to document notable changes to the project.
- Added `start-angle` prop.
- Added `section-click` event.
- Donut component specific `resize` event handler is now removed when the component is destroyed (as it should).


## [All versions before 1.1.2]

- The changelog didn't exist.
