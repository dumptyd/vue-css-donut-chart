<div align="center">
  <p align="center">
    <a href="https://dumptyd.github.io/vue-css-donut-chart">
      <img height="180" src="public/favicon.png">
    </a>
  </p>
  <h2 align="center">vue-css-donut-chart</h2>
  <p align="center">Lightweight Vue component for drawing pure CSS donut charts</p>

  <!-- badges -->
  <a href="https://www.npmjs.com/package/vue-css-donut-chart">
    <img alt="npm" src="https://img.shields.io/npm/v/vue-css-donut-chart?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/vue-css-donut-chart">
    <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/vue-css-donut-chart?style=flat-square">
  </a>
  <a href="https://bundlephobia.com/result?p=vue-css-donut-chart">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/vue-css-donut-chart?style=flat-square">
  </a>
  <a href="https://actions-badge.atrox.dev/dumptyd/vue-css-donut-chart/goto">
    <img alt="GitHub Actions status" src="https://img.shields.io/endpoint.svg?url=https://actions-badge.atrox.dev/dumptyd/vue-css-donut-chart/badge&label=tests&style=flat-square&logo=none">
  </a>
  <a href="https://codecov.io/gh/dumptyd/vue-css-donut-chart">
    <img alt="Coverage status" src="https://img.shields.io/codecov/c/gh/dumptyd/vue-css-donut-chart?style=flat-square">
  </a>
  <a href="https://snyk.io/vuln/npm:vue-css-donut-chart">
    <img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/vue-css-donut-chart?style=flat-square">
  </a>
</div>

## Live demo

Live demo can be found on the project page &ndash; https://dumptyd.github.io/vue-css-donut-chart

Playground &ndash; https://jsfiddle.net/dumptyd/ujvypcd3/

## Features

:black_medium_small_square: No external dependencies.

:black_medium_small_square: Small size footprint. [![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-css-donut-chart?style=flat-square)](https://bundlephobia.com/result?p=vue-css-donut-chart)

:black_medium_small_square: High test coverage. [![Coverage status](https://img.shields.io/codecov/c/gh/dumptyd/vue-css-donut-chart?style=flat-square)](https://codecov.io/gh/dumptyd/vue-css-donut-chart)

:black_medium_small_square: Performs automatic font size recalculation as the size of the donut changes.

:black_medium_small_square: Supports responsive donut and pie charts.

## Table of Contents

- [Installation and component registration](#installation)
- [Usage](#usage)
  - [Basic usage](#basic-usage)
  - [Usage with all the available props](#usage-with-all-the-available-props)
  - [Using the component as a pie chart](#using-the-component-as-a-pie-chart)
- [API](#api)
  - [Props](#props)
  - [Events](#events)
  - [Slots](#slots)
- [Contributing](#contributing)
- [License](#license)

## Installation

#### Install via `yarn` or `npm`

```console
yarn add vue-css-donut-chart
```

<p align="center"><strong><small>OR</small></strong></p>


```console
npm install vue-css-donut-chart
```

#### Registering `vue-css-donut-chart`

:black_medium_small_square: **ES6**

```javascript
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

Vue.use(Donut);

```

#### :black_medium_small_square: In-browser using CDNs

##### Using [unpkg](https://unpkg.com)

```html
<link rel="stylesheet" href="https://unpkg.com/vue-css-donut-chart@1/dist/vcdonut.css">
<script src="https://unpkg.com/vue-css-donut-chart@1"></script>
<script>
  Vue.use(vcdonut.default);
</script>
```

##### Using [jsDelivr](https://www.jsdelivr.com)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-css-donut-chart@1/dist/vcdonut.css">
<script src="https://cdn.jsdelivr.net/npm/vue-css-donut-chart@1/dist/vcdonut.umd.min.js"></script>
<script>
  Vue.use(vcdonut.default);
</script>
```

## Usage

#### Basic usage

With sane defaults in place, basic usage is as simple as passing a `sections` array with objects containing a `value` property.
This will create a donut with 2 sections that take up 25% each.

```vue
<template>
  <vc-donut :sections="sections">Basic donut</vc-donut>
</template>
<script>
  export default {
    data() {
      return {
        sections: [{ value: 25 }, { value: 25 }]
      };
    }
  };
</script>
```

#### Usage with all the available props

```vue
<template>
  <vc-donut
    background="white" foreground="grey"
    :size="200" unit="px" :thickness="30"
    has-legend legend-placement="top"
    :sections="sections" :total="100"
    :start-angle="0" :auto-adjust-text-size="true"
    @section-click="handleSectionClick">
    <h1>75%</h1>
  </vc-donut>
</template>
<script>
  export default {
    data() {
      return {
        sections: [
          { label: 'Red section', value: 25, color: 'red' },
          { label: 'Green section', value: 25, color: 'green' },
          { label: 'Blue section', value: 25, color: 'blue' }
        ]
      };
    },
    methods: {
      handleSectionClick(section, event) {
        console.log(`${section.label} clicked.`);
      }
    }
  };
</script>
```

For brevity, only the `section-click` event is demonstrated in the above example. You can use all the other `section-*` events the same way.

#### Using the component as a pie chart

Making the component look like a pie chart is as simple as setting the `thickness` to `100`.

```vue
<template>
  <vc-donut
    :sections="[{ value: 35 }, { value: 15 }, { value: 15 }, { value: 35 }]"
    :thickness="100">
  </vc-donut>
</template>
```

**Note:** setting `thickness` to 100 will completely hide the diagram's text or slot content. The content will still be present in the DOM, however it won't be visible for obvious reasons.

## API

#### Props

| Prop | Type | Required | Default | Description |
| ---- | :--: | :------: | :-----: | ----------- |
| `size` | Number | No | `250` | Diameter of the donut. Can be any positive value. |
| `unit` | String | No | `'px'` | Unit to use for `size`. Can be any valid CSS unit. Use `%` to make the donut responsive. |
| `thickness` | Number | No | `20` | Percent thickness of the donut ring relative to `size`. Can be any positive value between 0-100 (inclusive). Set this to 0 to draw a pie chart instead. |
| `text` | String | No | &ndash; | Text to show in the middle of the donut. This can also be provided through the default slot. |
| `background` | String | No | `'#ffffff'` | Background color of the donut. In most cases, this should be the background color of the parent element. |
| `foreground` | String | No | `'#eeeeee'` | Foreground color of the donut. This is the color that is shown for empty region of the donut ring. |
| `start-angle` | Number | No | `0` | Angle measure in degrees where the first section should start. |
| `total` | Number | No | `100` | Total for calculating the percentage for each section. |
| `has-legend` | Boolean | No | `false` | Whether the donut should have a legend. |
| `legend-placement` | String | No | `'bottom'` | Where the legend should be placed. Valid values are `top`, `right`, `bottom` and `left`. Doesn't have an effect if `has-legend` is not true. |
| `auto-adjust-text-size` | Boolean | No | `true` | Whether the font-size of the donut content is calculated automatically to fit the available space. |
| `sections` | Array<section> | No | `[]` | An array of objects. Each object in the array represents a section. |
| `section.value` | Number | **Yes** | &ndash; | Value of the section. The component determines what percent of the donut should be taken by a section based on this value and the `total` prop. Sum of all the sections' `value` should not exceed `total`, an error is thrown otherwise. |
| `section.color` | String | Read description | Read description | Color of the section. The component comes with 24 predefined colors, so this property is optional if you have <= 24 sections without the `color` property. |
| `section.label` | String | No | `'Section <section number>'` | Name of the section. This is used in the legend as well as the tooltip text of the section. |


#### Events

All the `section-*` listeners are called with the `section` object on which the event occurred and the native `Event` object as arguments respectively. Consider adding a custom property (eg: `name`) to the `section` objects to uniquely identify them.

| Event | Parameter | Description |
| ---------- | ------------ | ----------- |
| `section-click` | `section`, `event` | Emitted when a section is clicked. |
| `section-mouseenter` | `section`, `event` | Emitted when the `mouseenter` event occurs on a section. |
| `section-mouseleave` | `section`, `event` | Emitted when the `mouseleave` event occurs on a section. |
| `section-mouseover` | `section`, `event` | Emitted when the `mouseover` event occurs on a section. |
| `section-mouseout` | `section`, `event` | Emitted when the `mouseout` event occurs on a section. |
| `section-mousemove` | `section`, `event` | Emitted when the `mousemove` event occurs on a section. |

#### Slots

| Slot | Description |
| ---- | ----------- |
| default slot | If you want more control over the content of the chart, default slot can be used instead of the `text` prop. |
| `legend` | Slot for plugging in your own legend. |


## Contributing

**Issues** &ndash; https://github.com/dumptyd/vue-css-donut-chart/issues

## License

Code released under [MIT]((https://github.com/vue-css-donut-chart/vue-css-donut-chart/blob/master/LICENSE)) license.
