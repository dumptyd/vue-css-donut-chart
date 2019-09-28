# Changelog

All notable changes to this project will be documented in this file.

## [1.1.4]

### Fixed

- `section-click` is now emitted with the original `section` object that's passed to the component. Earlier, it was being emitted with the internal `section` object which is an extended version of the original one.

### Other changes

- The component now has tests and a very high coverage. Check out the README to see the coverage info.
- The project now has automated checks for broken tests and linter errors.
- Minor refactoring.

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
