# Changelog

All notable changes to v2 will be documented in this file.

## 2.1.0

- Rewrite in TypeScript. Types are included with the package.
- New prop `suppress-validation-warnings` to suppress warnings about invalid values.
- Less pedantic validation of certain props like `size`.
- `auto-adjust-text-size` now uses ResizeObserver instead of window resize event. This will allow for more accurate text size adjustments when the component is resized dynamically.
- Source maps are now included with the package. *.min.js files are still included for backwards compatibility but they are just a copy of their *.js counterparts.

## 2.0.0

### Added
- Support for Vue 3

## 1.x

[Changelog for v1 (Vue 2)](https://github.com/dumptyd/vue-css-donut-chart/blob/legacy/CHANGELOG.md)
