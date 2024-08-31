<template>
  <div class="container">
    <div class="container-header">
      <h1>
        vue-css-donut-chart <sup>{{ version }}</sup>
      </h1>
      <div>
        Lightweight
        <select class="vue-version-select" @change="handleVersionSelectChange">
          <option value="/vue-css-donut-chart/legacy/">Vue 2</option>
          <option value="/vue-css-donut-chart/" selected>Vue 3</option>
        </select>
        component for creating donut charts
      </div>
    </div>

    <nav class="container-nav">
      <a href="https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md">Documentation</a>
      <a href="https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md#installation">Installation</a>
      <a href="https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md#usage">Usage</a>
      <a href="https://github.com/dumptyd/vue-css-donut-chart">GitHub</a>
    </nav>

    <div class="container-donut">
      <donut-chart v-bind="validatedProps" v-on="listeners">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="donutHTML"></div>
      </donut-chart>
    </div>

    <div class="container-body">
      <div class="configuration">
        <!-- donut config -->
        <div>
          <h3>Donut configuration</h3>
          <div class="control-group">
            <div class="control">
              <label for="background">Background</label>
              <input v-model="donutProps.background" name="background" type="color" required />
            </div>
            <div class="control">
              <label for="foreground">Foreground</label>
              <input v-model="donutProps.foreground" name="foreground" type="color" required />
            </div>
            <div class="control">
              <label for="size">Size</label>
              <input v-model.number="donutProps.size" name="size" type="number" class="sm" min="0" required />
              <select v-model="donutProps.unit">
                <option v-for="option in options.unit" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="control">
              <label for="thickness">Ring thickness (%)</label>
              <input
                v-model.number="donutProps.thickness"
                name="thickness"
                type="number"
                min="0"
                max="100"
                class="sm"
                required
              />
            </div>
            <div class="control">
              <label for="start-angle">Start angle (in degrees)</label>
              <input v-model.number="donutProps.startAngle" name="start-angle" type="number" class="sm" required />
            </div>
          </div>
        </div>
        <!-- end donut config -->

        <!-- legend config -->
        <div>
          <h3>Legend configuration</h3>
          <div class="control-group">
            <div class="control checkbox">
              <label for="has-legend">Has legend?</label>
              <input id="has-legend" v-model="donutProps.hasLegend" type="checkbox" />
            </div>
            <div class="control">
              <label for="placement">Legend Placement</label>
              <select v-model="donutProps.legendPlacement" name="placement" :disabled="!donutProps.hasLegend">
                <option v-for="option in options.placement" :key="option" :value="option">
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
              <textarea v-model="donutHTML" name="text" rows="3"></textarea>
            </div>
          </div>

          <div class="control checkbox">
            <input id="auto-adjust-text-size" v-model="donutProps.autoAdjustTextSize" type="checkbox" />
            <label for="auto-adjust-text-size">Auto-adjust font size based on the size of the chart</label>
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
            <div v-for="evt in options.events" :key="evt" class="control checkbox">
              <input
                :id="`${evt}-checkbox`"
                v-model="selectedEvents"
                name="event-selection"
                type="checkbox"
                :value="evt"
              />
              <label :for="`${evt}-checkbox`">section-{{ evt }}</label>
            </div>
          </div>

          <div class="note">Checked events will log to console when they're triggered.</div>
        </div>
        <!-- end section events -->

        <!-- donut sections -->
        <div class="donut-sections">
          <h3>Donut sections</h3>
          <div v-for="(section, idx) in editableSections" :key="idx" class="control-group">
            <div class="control">
              <pre><small>{{ idx + 1 }}.</small></pre>
            </div>
            <div class="control">
              <label :for="`section-value-${idx + 1}`">Value</label>
              <input
                v-model.number="section.value"
                class="sm"
                name="`section-value-${idx + 1}`"
                :min="0"
                :max="remaining + (typeof section.value === 'number' ? section.value : 0)"
                type="number"
              />
            </div>
            <div class="control">
              <label :for="`section-label-${idx + 1}`">Label</label>
              <input v-model="section.label" name="`section-label-${idx + 1}`" type="text" />
            </div>
            <div class="control">
              <label :for="`section-color-${idx + 1}`">Color</label>
              <input v-model="section.color" class="sm" name="`section-color-${idx + 1}`" type="color" />
            </div>
            <div class="control">
              <button class="outline-red" @click="removeSection(idx)">- remove</button>
            </div>
          </div>
        </div>

        <button class="outline-green" @click="addSection">
          + add {{ editableSections.length ? 'another' : 'a' }} section
        </button>
        <!-- end donut sections -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import DonutChart, { type Props as DonutProps } from '@/components/DonutChart.vue';
import type { DonutSection } from '@/utils/types';
import { version } from '@/../package.json';
import '@/styles/normalize.css';
import '@/styles/site.css';
import { toPrecise } from '@/utils/misc';
import { defaultColors } from '@/utils/colors';

const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const options = {
  unit: ['px', '%'],
  textType: ['HTML', 'text'],
  placement: ['top', 'right', 'bottom', 'left'],
  events: ['click', 'mouseenter', 'mouseleave', 'mouseout', 'mousemove', 'mouseover'],
} as const;

const donutProps = ref<{
  background: NonNullable<DonutProps['background']>;
  foreground: NonNullable<DonutProps['foreground']>;
  size: NonNullable<DonutProps['size']>;
  unit: NonNullable<DonutProps['unit']>;
  thickness: NonNullable<DonutProps['thickness']>;
  hasLegend: NonNullable<DonutProps['hasLegend']>;
  legendPlacement: NonNullable<DonutProps['legendPlacement']>;
  total: NonNullable<DonutProps['total']>;
  startAngle: NonNullable<DonutProps['startAngle']>;
  autoAdjustTextSize: NonNullable<DonutProps['autoAdjustTextSize']>;
}>({
  background: '#ffffff',
  foreground: '#eeeeee',
  size: 200,
  unit: 'px',
  thickness: 20,
  hasLegend: true,
  legendPlacement: 'bottom',
  total: 100,
  startAngle: 0,
  autoAdjustTextSize: true,
});

const editableSections = ref<
  Array<{
    value: number | string;
    label: string | undefined;
    color: string | undefined;
  }>
>(
  ['Wake up', 'Work', 'Eat donuts', 'Sleep'].map((label, i, arr) => ({
    value: getRandomIntInclusive(100 / arr.length / 2, 100 / arr.length),
    label,
    color: defaultColors[i] || undefined,
  })),
);

const donutHTML = ref(
  (() => {
    const initialConsumed =
      editableSections.value.reduce((a, c) => a + (typeof c.value === 'number' ? c.value : 0), 0) ?? 0;
    return `<h1 style="margin: 0;">${initialConsumed}%</h1> donut consumed`;
  })(),
);

const consumed = computed(() =>
  editableSections.value.reduce((a, c) => a + (typeof c.value === 'number' ? c.value : 0), 0),
);
const remaining = computed(() => donutProps.value.total - consumed.value);

const validatedSections = computed<DonutSection[]>(() => {
  if (toPrecise(consumed.value) > toPrecise(donutProps.value.total)) return [];
  const ret: DonutSection[] = [];
  editableSections.value.forEach((section) => {
    if (typeof section.value !== 'number') return;
    ret.push({
      value: section.value,
      label: section.label,
      color: section.color,
    });
  });
  return ret;
});

const validatedProps = computed<DonutProps>(() => {
  // some values can be empty strings when user clears the input, this accounts for those cases mainly
  return {
    background: donutProps.value.background,
    foreground: donutProps.value.foreground,
    size: typeof donutProps.value.size === 'number' && donutProps.value.size >= 0 ? donutProps.value.size : 200,
    unit: donutProps.value.unit,
    thickness:
      typeof donutProps.value.thickness === 'number' && donutProps.value.thickness >= 0
        ? donutProps.value.thickness
        : 20,
    hasLegend: donutProps.value.hasLegend,
    legendPlacement: donutProps.value.legendPlacement,
    total: donutProps.value.total,
    startAngle: donutProps.value.startAngle || 0,
    autoAdjustTextSize: donutProps.value.autoAdjustTextSize,
    sections: validatedSections.value,
  };
});

const selectedEvents = ref<(typeof options.events)[number][]>(['click']);
const listeners = computed(() => {
  const handler = (section: DonutSection, event: Event) => {
    const info = [
      ['-'.repeat(10)],
      [`"${event.type}" occurred on "${section.label || 'Unnamed section'}"`],
      ['Section object:', JSON.parse(JSON.stringify(section))],
      ['Native event:', event],
    ];
    info.forEach((args) => console.log(...args));
  };
  const ret: Partial<Record<`section-${(typeof options.events)[number]}`, typeof handler>> = {};
  options.events
    .filter((evt) => selectedEvents.value.includes(evt))
    .forEach((evt) => {
      ret[`section-${evt}`] = handler;
    });
  return ret;
});

const addSection = () => {
  editableSections.value.push({
    value: 0,
    label: '',
    color: defaultColors[editableSections.value.length] || undefined,
  });
};

const removeSection = (idx: number) => {
  editableSections.value.splice(idx, 1);
};

const handleVersionSelectChange = (evt: Event) => {
  window.location.href = (evt.target as HTMLSelectElement).value;
};
</script>
