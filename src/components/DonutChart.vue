<template>
  <div class="cdc-container" :style="placementStyles?.container">
    <div ref="donutEl" class="cdc" :style="donutStyles">
      <donut-sections
        :sections="props.sections"
        :start-angle="props.startAngle"
        :total="props.total"
        @section-click="emit('section-click', $event.section, $event.event)"
        @section-mouseenter="emit('section-mouseenter', $event.section, $event.event)"
        @section-mouseleave="emit('section-mouseleave', $event.section, $event.event)"
        @section-mouseover="emit('section-mouseover', $event.section, $event.event)"
        @section-mouseout="emit('section-mouseout', $event.section, $event.event)"
        @section-mousemove="emit('section-mousemove', $event.section, $event.event)"
      >
      </donut-sections>
      <div class="cdc-overlay" :style="overlayStyles">
        <div class="cdc-text" :style="donutTextStyles">
          <slot>{{ text }}</slot>
        </div>
      </div>
    </div>

    <slot name="legend">
      <div v-if="hasLegend" class="cdc-legend" :style="placementStyles?.legend">
        <span v-for="(legendItem, idx) in legendItems" :key="idx" class="cdc-legend-item" :title="legendItem.value">
          <span class="cdc-legend-item-color" :style="legendItem.styles"></span>
          <span>{{ legendItem.label }}</span>
        </span>
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, type StyleValue } from 'vue';
import { toPrecise, useElementSize } from '@/utils/misc';
import { getDefaultColorDispatcher } from '@/utils/colors';
import { legendPlacementStyles } from '@/utils/misc';
import DonutSections from '@/components/DonutSections.vue';
import type { DonutSection } from '@/utils/types';
import '@/styles/main.css';

export interface Props {
  /** diameter of the donut */
  size?: number;

  /** unit to use for `size` */
  unit?: string;

  /** percent value for the donut ring's thickness */
  thickness?: number;

  /** text in the middle of the donut */
  text?: string;

  /** auto adjust text size based on donut size */
  autoAdjustTextSize?: boolean;

  /**
   * color to use for the middle of the donut
   * either set this to `transparent` or set `thickness` to 100 to make a pie chart
   */
  background?: string;

  /** color to use for the empty ring areas */
  foreground?: string;

  /** sections of the donut */
  sections?: DonutSection[];

  /** total value of all sections */
  total?: number;

  /** show legend */
  hasLegend?: boolean;

  /** legend placement */
  legendPlacement?: 'top' | 'right' | 'bottom' | 'left';

  /** degree angle at which the first section begins */
  startAngle?: number;

  /** suppress validation warnings */
  suppressValidationWarnings?: boolean;
}

export interface Emits {
  (e: 'section-click', section: DonutSection, event: MouseEvent): void;
  (e: 'section-mouseenter', section: DonutSection, event: MouseEvent): void;
  (e: 'section-mouseleave', section: DonutSection, event: MouseEvent): void;
  (e: 'section-mouseover', section: DonutSection, event: MouseEvent): void;
  (e: 'section-mouseout', section: DonutSection, event: MouseEvent): void;
  (e: 'section-mousemove', section: DonutSection, event: MouseEvent): void;
}

const props = withDefaults(defineProps<Props>(), {
  size: 250,
  unit: 'px',
  thickness: 20,
  text: '',
  autoAdjustTextSize: true,
  background: '#ffffff',
  foreground: '#eeeeee',
  sections: () => [],
  total: 100,
  hasLegend: false,
  legendPlacement: 'bottom',
  startAngle: 0,
  suppressValidationWarnings: false,
});
const emit = defineEmits<Emits>();

const donutEl = ref<HTMLElement>();

// #region legend

const legendItems = computed(() => {
  const getNextDefaultColor = getDefaultColorDispatcher();

  const items: Array<{
    label: string;
    value: string;
    styles: { backgroundColor: string };
  }> = props.sections.map((section, idx) => ({
    label: section.label || `Section ${idx + 1}`,
    value: `${section.value} (${toPrecise(section.value / (props.total || 1)) * 100}%)`,
    styles: {
      backgroundColor: section.color || getNextDefaultColor(),
    },
  }));

  return items;
});

// #endregion legend

// #region dynamic font size

const fontSize = ref('1em');

const recalculateFontSize = () => {
  if (!props.autoAdjustTextSize) {
    fontSize.value = '1em';
    return;
  }

  const scaleDownBy = 0.08;
  let widthInPx: number | null = props.size;

  if (props.unit !== 'px') {
    /* istanbul ignore else -- @preserve */
    if (donutEl.value) widthInPx = donutEl.value.clientWidth;
    else widthInPx = null;
  }

  fontSize.value = widthInPx ? `${toPrecise(widthInPx * scaleDownBy)}px` : '1em';
};

useElementSize({
  el: donutEl,
  onResize: recalculateFontSize,
});

watch(
  () => props.autoAdjustTextSize,
  (autoAdjustTextSize) => {
    if (autoAdjustTextSize) window.addEventListener('resize', recalculateFontSize);
    else window.removeEventListener('resize', recalculateFontSize);

    recalculateFontSize();
  },
);

// #endregion dynamic font size

// #region dynamic styles

const placementStyles = computed(() => {
  if (!props.hasLegend) return null;
  return legendPlacementStyles[props.legendPlacement];
});

const donutStyles = computed<StyleValue>(() => {
  const size = `${props.size}${props.unit}`;
  return {
    width: size,
    paddingBottom: size,
    backgroundColor: props.foreground,
  };
});

const overlayStyles = computed<StyleValue>(() => {
  const size = 100 - props.thickness;

  const sizePercent = `${size}%`;
  const pos = `calc(50% - ${size / 2}%)`;

  return {
    height: sizePercent,
    width: sizePercent,
    top: pos,
    left: pos,
    backgroundColor: props.background,
  };
});

const donutTextStyles = computed<StyleValue>(() => ({
  fontSize: fontSize.value,
}));

// #endregion dynamic styles

// #region validation

watch(
  () => props.size,
  () => {
    if (props.suppressValidationWarnings) return;
    if (props.size < 0) console.warn('vue-css-donut-chart: `size` must be a positive number');
  },
  { immediate: true },
);

watch(
  () => props.thickness,
  () => {
    if (props.suppressValidationWarnings) return;
    if (props.thickness < 0 || props.thickness > 100)
      console.warn('vue-css-donut-chart: `thickness` must be between 0 and 100');
  },
  { immediate: true },
);

watch(
  [() => props.total, () => props.sections],
  () => {
    if (props.suppressValidationWarnings) return;

    if (props.total < 0) {
      console.warn('vue-css-donut-chart: `total` must be a positive number');
      return;
    }

    const totalValue = toPrecise(
      props.sections.reduce((acc, section) => acc + (typeof section.value === 'number' ? section.value : 0), 0),
    );
    if (totalValue > props.total) console.warn('vue-css-donut-chart: Sum of section values exceeds `total`');
  },
  { immediate: true, deep: true },
);

// #endregion validation
</script>
