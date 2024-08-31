<div align="center">
  <p align="center">
    <a href="https://dumptyd.github.io/vue-css-donut-chart">
      <img height="180" src="public/favicon.png">
    </a>
  </p>
  <h2 align="center">vue-css-donut-chart</h2>
  <p align="center">Lightweight Vue component for creating donut charts</p>

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
  <a href="https://codecov.io/gh/dumptyd/vue-css-donut-chart/">
    <img alt="Coverage status" src="https://img.shields.io/codecov/c/gh/dumptyd/vue-css-donut-chart?style=flat-square">
  </a>
</div>

<hr>

| Using Vue 2? |
| :- |
| Check out the [documentation for vue-css-donut-chart v1](https://github.com/dumptyd/vue-css-donut-chart/tree/legacy). |
| **NPM** - https://www.npmjs.com/package/vue-css-donut-chart/v/legacy |

## Preview

Live demo &ndash; https://dumptyd.github.io/vue-css-donut-chart/

Playground &ndash; https://jsfiddle.net/dumptyd/f4tmz0oy/

## Installation

#### NPM

```console
yarn add vue-css-donut-chart
# OR
npm i vue-css-donut-chart
# OR
pnpm add vue-css-donut-chart
```

#### In-browser

```html
<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/vue-css-donut-chart@2/dist/vcdonut.css">
<script src="https://unpkg.com/vue-css-donut-chart@2"></script>

<!-- OR -->

<!-- jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-css-donut-chart@2/dist/vcdonut.css">
<script src="https://cdn.jsdelivr.net/npm/vue-css-donut-chart@2/dist/vcdonut.umd.min.js"></script>

<!-- registration -->
<script>
  const app = Vue.createApp({});
  app.use(vcdonut.default); // component will be available as 'vc-donut'
</script>
```

## Usage

#### Basic usage

```vue
<template>
  <vc-donut :sections="sections">Basic donut</vc-donut>
</template>
<script setup>
  import { VcDonut } from 'vue-css-donut-chart';
  const sections = [{ value: 25 }, { value: 25 }];
</script>
```

#### Usage with all available props and events

```vue
<template>
  <vc-donut
    background="white"
    foreground="grey"

    :size="200"
    unit="px"

    :thickness="30"

    has-legend
    legend-placement="top"

    :sections="sections"
    :total="100"
    :start-angle="0"

    auto-adjust-text-size
    :suppress-validation-warnings="false"

    @section-click="handleSectionClick"
    @section-mouseenter="handleSectionEvent"
    @section-mouseleave="handleSectionEvent"
    @section-mouseover="handleSectionEvent"
    @section-mouseout="handleSectionEvent"
    @section-mousemove="handleSectionEvent">
    <h1>75%</h1>
  </vc-donut>
</template>
<script setup>
  import { VcDonut } from 'vue-css-donut-chart';
  const sections = [
    { label: 'Red section', value: 25, color: 'red' },
    { label: 'Green section', value: 25, color: 'green' },
    { label: 'Blue section', value: 25, color: 'blue' }
  ];
  const handleSectionEvent = (section, event) => {
    console.log(`Section: ${section.label} | Event: ${event.type}.`);
  };
</script>
```

#### Using the component as a pie chart

Set `thickness` to `0` to make the component look like a pie chart.

```vue
<template>
  <vc-donut
    :sections="[{ value: 35 }, { value: 15 }, { value: 15 }, { value: 35 }]"
    :thickness="100">
  </vc-donut>
</template>
<script setup>
  import { VcDonut } from 'vue-css-donut-chart';
</script>
```

**Note:** setting `thickness` to 100 will completely hide the chart's text or slot content. The content will still be present in the DOM, but it will not be visible.

## API

#### Props

| Prop | Type | Required | Default | Description |
| ---- | :--: | :------: | :-----: | ----------- |
| `size` | Number | No | `250` | Diameter of the donut. Can be any positive value. |
| `unit` | String | No | `'px'` | Unit to use for `size`. Can be any valid CSS unit. Use `%` to make the donut responsive. |
| `thickness` | Number | No | `20` | Percent thickness of the donut ring relative to `size`. Can be any positive value between 0-100 (inclusive). |
| `text` | String | No | &ndash; | Text to show in the middle of the donut. This can also be provided through the default slot. |
| `background` | String | No | `'#ffffff'` | Background color of the donut. In most cases, this should be the background color of the parent element. |
| `foreground` | String | No | `'#eeeeee'` | Foreground color of the donut. This is the color that is shown for empty region of the donut ring. |
| `start-angle` | Number | No | `0` | Angle measure in degrees where the first section should start. |
| `total` | Number | No | `100` | Total for calculating the percentage for each section. |
| `has-legend` | Boolean | No | `false` | Whether the donut should have a legend. |
| `legend-placement` | String | No | `'bottom'` | Where the legend should be placed. Valid values are `top`, `right`, `bottom` and `left`. Doesn't have an effect if `has-legend` is not true. |
| `auto-adjust-text-size` | Boolean | No | `true` | Whether the font-size of the donut content is calculated automatically to fit the available space proportionally. |
| `sections` | Array<section> | No | `[]` | An array of objects. Each object in the array represents a section. |
| `section.value` | Number | **Yes** | &ndash; | Value of the section. The component determines what percent of the donut should be taken by a section based on this value and the `total` prop. Sum of all the sections' `value` should not exceed `total`. |
| `section.color` | String | Read description | Read description | Color of the section. The component comes with 24 predefined colors, so this property is optional if you have <= 24 sections without the `color` property. |
| `section.label` | String | No | `'Section <section number>'` | Name of the section. This is used in the legend as well as the tooltip text of the section. |
| `section.ident` | String | No | &ndash; | Identifier for the section. This can be used to uniquely identify a section in the `section-*` events. |
| `suppress-validation-warnings` | Boolean | No | `false` | Whether to suppress warnings for invalid prop values. |


#### Events

All the `section-*` listeners are called with the `section` object on which the event occurred and the native `Event` object as arguments respectively.
Use the `ident` property to uniquely identify sections in the `section-*` events.


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

## Typescript

This package is written in TypeScript and comes with its own type definitions out of the box. The types are exported from the main package, so you can import them directly in your project.

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { VcDonut } from 'vue-css-donut-chart';
import type { DonutSection, DonutChartProps, DonutChartEmits } from 'vue-css-donut-chart';

const sections = ref<DonutSection[]>([
  { label: 'Red section', value: 25, color: 'red' },
  { label: 'Green section', value: 25, color: 'green' },
  { label: 'Blue section', value: 25, color: 'blue' }
]);

const otherProps: DonutChartProps = {
  size: 200,
  unit: 'px',
  thickness: 30,
  hasLegend: true,
  // ...
};
</script>
```

## Contributing

**Issues** &ndash; https://github.com/dumptyd/vue-css-donut-chart/issues

## License

Code released under [MIT](https://github.com/vue-css-donut-chart/vue-css-donut-chart/blob/master/LICENSE) license.
