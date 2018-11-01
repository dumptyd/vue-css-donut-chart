<template>
<div class="container">
  <div class="container-header">
    <h1>vue-css-donut-chart</h1>
    <span>Lightweight Vue component for drawing pure CSS donut charts</span>
  </div>
  <nav class="container-nav">
    <a href="https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md">Documentation</a>
    <a href="https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md#installation">Installation</a>
    <a href="https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md#usage">Usage</a>
    <a href="https://github.com/dumptyd/vue-css-donut-chart">Github</a>
  </nav>
  <div class="container-donut">
    <Donut
        :background="background" :foreground="foreground"
        :size="size" :unit="unit" :thickness="thickness"
        :hasLegend="hasLegend" :legendPlacement="legendPlacement"
        :sections="validatedSections"
        :total="total"
    >
      <div v-html="donutHTML"></div>
    </Donut>
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
            <input name="size" type="number" class="sm" v-model="size">
            <select v-model="unit">
              <option v-for="option in unitOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="control">
            <label for="thickness">Ring thickness (%)</label>
            <input name="thickness" type="number" min="0" max="100" class="sm" v-model="thickness">
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
            <input name="has-legend" type="checkbox" v-model="hasLegend">
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
      </div>
      <!-- end donut content -->

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
              type="number" v-model.number="section.value"
            >
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
import '../../styles/normalize.css';
import '../../styles/site.css';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

    return {
      background: '#ffffff',
      foreground: '#eeeeee',
      size: 200,
      unit: 'px',
      thickness: 20,

      total,

      hasLegend: true,
      legendPlacement: 'bottom',

      textType: 'HTML',
      donutHTML: `<h1 style="margin: 0;">${initialConsumed}%</h1> donut consumed`,
      donutText: '',

      unitOptions,
      placementOptions,
      textTypeOptions,

      sections
    };
  },
  computed: {
    consumed() {
      return this.sections.reduce((a, c) => a + c.value, 0);
    },
    remaining() {
      return this.total - this.consumed;
    },
    validatedSections() {
      if (this.consumed > this.total) return [];
      return this.sections;
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
    }
  },
  components: { Donut }
};
</script>
