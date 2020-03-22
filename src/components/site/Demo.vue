<template>
<div class="container">
  <div class="container-header">
    <h1>vue-css-donut-chart <sup>{{ version }}</sup></h1>
    <span>Lightweight Vue component for drawing pure CSS donut charts</span>
  </div>
  <nav class="container-nav">
    <a href="https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md">Documentation</a>
    <a href="https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md#installation">Installation</a>
    <a href="https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md#usage">Usage</a>
    <a href="https://github.com/dumptyd/vue-css-donut-chart">GitHub</a>
  </nav>
  <div class="container-donut">
    <donut v-on="listeners" v-bind="donutProps">
      <div v-html="donutHTML"></div>
    </donut>
  </div>
  <div class="container-body">
    <div class="configuration">
      <!-- donut config -->
      <div>
        <h3>Donut configuration</h3>
        <div class="control-group">
          <div class="control">
            <label for="background">Background</label>
            <input name="background" type="color" v-model="background">
          </div>
          <div class="control">
            <label for="foreground">Foreground</label>
            <input name="foreground" type="color" v-model="foreground">
          </div>
          <div class="control">
            <label for="size">Size</label>
            <input name="size" type="number" class="sm" min="1" v-model.number="size">
            <select v-model="unit">
              <option v-for="option in unitOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="control">
            <label for="thickness">Ring thickness (%)</label>
            <input name="thickness" type="number" min="0" max="100" class="sm" v-model.number="thickness">
          </div>
          <div class="control">
            <label for="start-angle">Start angle (in degrees)</label>
            <input name="start-angle" type="number" class="sm" v-model.number="startAngle">
          </div>
        </div>
      </div>
      <!-- end donut config -->

      <!-- legend config -->
      <div>
        <h3>Legend configuration</h3>
        <div class="control-group">
          <div class="control">
            <label for="has-legend">Has legend?</label>
            <input id="has-legend" type="checkbox" v-model="hasLegend">
          </div>
          <div class="control">
            <label for="placement">Legend Placement</label>
            <select name="placement" v-model="legendPlacement" :disabled="!hasLegend">
              <option v-for="option in placementOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <!-- end legend config -->

      <!-- donut content -->
      <div>
        <h3>Donut content</h3>
        <div class="control-group">
          <div class="control control-vertical flex-grow-1 flex-start">
            <label for="text">Content <small>(HTML supported)</small></label>
            <textarea name="text" rows="3" v-if="textType === 'HTML'" v-model="donutHTML"></textarea>
          </div>
        </div>

        <div class="control">
          <label for="auto-adjust-text-size">Auto-adjust font size based on the chart size</label>
          <input id="auto-adjust-text-size" type="checkbox" v-model="autoAdjustTextSize">
        </div>
        <div class="note">
          Try setting the size to 500px and then check and uncheck this setting to see the difference.
        </div>
      </div>
      <!-- end donut content -->

      <!-- section events -->
      <div>
        <h3>Section events</h3>
        <div class="control-group">
          <div class="control" v-for="event in events" :key="event.sectionEventName">
            <label :for="`${event.sectionEventName}-checkbox`">{{ event.sectionEventName }}</label>
            <input :id="`${event.sectionEventName}-checkbox`" type="checkbox" v-model="event.enabled">
          </div>
        </div>

        <div class="note">Checked events will log to console when they're triggered.</div>
      </div>
      <!-- end section events -->

      <!-- donut sections -->
      <div class="donut-sections">
        <h3>Donut sections</h3>
        <div class="control-group" v-for="(section, idx) in sections" :key="idx">
          <div class="control">
            <pre><small>{{ idx + 1 }}.</small></pre>
          </div>
          <div class="control">
            <label :for="`section-value-${idx + 1}`">Value</label>
            <input
              class="sm" name="`section-value-${idx + 1}`" :min="0" :max="section.value + remaining"
              type="number" v-model.number="section.value">
          </div>
          <div class="control">
            <label :for="`section-label-${idx + 1}`">Label</label>
            <input name="`section-label-${idx + 1}`" type="text" v-model="section.label">
          </div>
          <div class="control">
            <label :for="`section-color-${idx + 1}`">Color</label>
            <input class="sm" name="`section-color-${idx + 1}`" type="color" v-model="section.color">
          </div>
          <div class="control">
            <button class="outline-red" @click="removeSection(idx)">- remove</button>
          </div>
        </div>
      </div>

      <button class="outline-green" @click="addSection">
        + add {{ sections.length ? 'another': 'a' }} section
      </button>
      <!-- end donut sections -->
    </div>
  </div>
</div>
</template>

<script>
import Donut from '../Donut.vue';
import colors from '../../utils/colors';
import { nativeSectionEvents } from '../../utils/events';
import { version } from '../../../package.json';
import '../../styles/normalize.css';
import '../../styles/site.css';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getObjectWithoutReactiveKeys = obj => JSON.parse(JSON.stringify(obj));
const toFixed = num => Number(Number(num).toFixed(2));

export default {
  data() {
    const unitOptions = ['px', '%'];
    const placementOptions = ['top', 'right', 'bottom', 'left'];
    const textTypeOptions = ['text', 'HTML'];

    const labels = ['Wake up', 'Work', 'Eat donuts', 'Sleep'];

    const total = 100;

    const sections = Array(4).fill(true).map((_, i, arr) => ({
      value: getRandomIntInclusive((total / arr.length) / 2, total / arr.length),
      label: labels[i],
      color: colors[i]
    }));

    const initialConsumed = sections.reduce((a, c) => a + c.value, 0);

    const initiallyEnabledEvents = ['click'];
    const events = nativeSectionEvents.map(event => ({
      ...event,
      enabled: initiallyEnabledEvents.includes(event.nativeEventName)
    }));

    return {
      background: '#ffffff',
      foreground: '#eeeeee',
      size: 200,
      unit: 'px',
      thickness: 20,
      startAngle: 0,

      total,

      hasLegend: true,
      legendPlacement: 'bottom',

      textType: 'HTML',
      donutHTML: `<h1 style="margin: 0;">${initialConsumed}%</h1> donut consumed`,
      autoAdjustTextSize: true,

      unitOptions,
      placementOptions,
      textTypeOptions,

      sections,
      events,

      version
    };
  },
  computed: {
    donutProps() {
      const {
        background, foreground,
        size, unit, thickness,
        hasLegend, legendPlacement,
        validatedSections, total,
        startAngle, autoAdjustTextSize
      } = this;
      const [computedSize, computedThickness, computedTotal, computedStartAngle] =
        [size, thickness, total, startAngle].map(val => toFixed(val));
      return {
        background, foreground,
        size: computedSize > 0 ? computedSize : 200, unit,
        thickness: computedThickness >= 0 && computedThickness <= 100 ? computedThickness : 20,
        hasLegend, legendPlacement,
        autoAdjustTextSize,
        sections: validatedSections, total: computedTotal > 0 ? computedTotal : 100,
        startAngle: computedStartAngle || 0
      };
    },
    consumed() {
      return this.sections.reduce((a, c) => a + c.value, 0);
    },
    remaining() {
      return this.total - this.consumed;
    },
    validatedSections() {
      const { consumed, total } = this;
      if (
        [consumed, total].some(val => typeof val !== 'number') ||
        toFixed(this.consumed) > toFixed(this.total)
      ) return [];
      return this.sections;
    },
    listeners() {
      return this.events.filter(event => event.enabled).reduce((acc, curr) => ({
        ...acc,
        [curr.sectionEventName]: (...args) => this.handleSectionEvent(curr, ...args)
      }), {});
    }
  },
  methods: {
    addSection() {
      this.sections.push({
        value: 0,
        label: null,
        color: colors[this.sections.length] || null
      });
    },
    removeSection(idx) {
      this.sections.splice(idx, 1);
    },
    handleSectionEvent({ sectionEventName }, section, event) {
      const info = [
        ['-'.repeat(10)],
        [`"${sectionEventName}" occurred on "${section.label || 'Unnamed section'}"`],
        ['Section object:', getObjectWithoutReactiveKeys(section)],
        ['Native event:', event]
      ];
      // eslint-disable-next-line no-console
      info.forEach(args => console.log(...args));
    }
  },
  components: { Donut }
};
</script>
