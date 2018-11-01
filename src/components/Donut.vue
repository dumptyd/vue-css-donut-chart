<template>
<div class="cdc-container" :style="placementStyles.container">
  <div class="cdc" ref="donut" :style="donutStyles">
    <DonutSections :sections="donutSections" />
    <div class="cdc-overlay" :style="overlayStyles">
      <div class="cdc-text" :style="donutTextStyles">
        <slot>{{ text }}</slot>
      </div>
    </div>
  </div>

  <slot name="legend">
    <div class="cdc-legend" v-if="hasLegend" :style="placementStyles.legend">
      <span class="cdc-legend-item" v-for="(item, idx) in legend" :key="idx" :title="item.percent">
        <span class="cdc-legend-item-color" :style="item.styles"></span>
        <span>{{ item.label }}</span>
      </span>
    </div>
  </slot>
</div>
</template>

<script>
import defaultColors from '../utils/colors';
import { placement, placementStyles, sectionValidator } from '../utils/misc';
import DonutSections from './DonutSections.vue';

import '../styles/main.css';

export default {
  name: 'vc-donut',
  props: {
    // diameter of the donut
    size: { type: Number, default: 250, validator: v => v > 0 },

    // unit to use for `size`
    unit: { type: String, default: 'px' },

    // percentage of donut ring's thickness
    thickness: {
      type: Number,
      default: 20,
      validator: v => v >= 0 && v <= 100
    },

    // text in the middle of the donut, this can also be passed using the default slot
    text: { type: String, default: null },

    // color to use for the middle of the donut
    // set this to `transparent` or `thickness` to 100 to make a pie chart instead
    background: { type: String, default: '#ffffff' },

    // color to use for the empty ring areas
    foreground: { type: String, default: '#eeeeee' },

    // sections of the donut, must have a `degree` property
    // other valid properties are `label` and `color` (default is `dodgerblue`)
    sections: {
      type: Array,
      default: () => [],
      validator(sections) {
        for (let i = 0; i < sections.length; ++i) {
          if (!sectionValidator(sections[i])) return false;
        }
        return true;
      }
    },
    total: { type: Number, default: 100, validator: v => v > 0 },
    hasLegend: { type: Boolean, default: false },
    legendPlacement: {
      default: placement.BOTTOM,
      validator: val => !!placement[val.toUpperCase()]
    }
  },
  watch: {
    size() {
      this.recalcFontSize();
    },
    unit() {
      this.recalcFontSize();
    },
  },
  data() {
    return { donutEl: null, fontSize: '1em' };
  },
  computed: {
    donutSections() {
      const valueTotal = this.sections.reduce((a, c) => a + c.value, 0);
      if (valueTotal > this.total) {
        const err = `Sum of all the sections' values (${valueTotal}) should not exceed \`total\` (${this.total})`;
        throw new Error(err);
      }
      const degreesInACircle = 360;
      const degreesInASection = 180;

      let consumedDegrees = 0;
      let currentDefaultColorIdx = 0;

      const sections = [];
      this.sections.forEach(section => {
        const valToDeg = degreesInACircle * (section.value / this.total);

        let degreeArr = [valToDeg];

        if (valToDeg > degreesInASection) {
          degreeArr = [degreesInASection, valToDeg - degreesInASection];
        }

        const color = section.color || defaultColors[currentDefaultColorIdx++];

        degreeArr.forEach(degree => {
          const consumedWithCurrent = consumedDegrees + degree;
          if (consumedWithCurrent > degreesInASection) {
            const remainingDegreesInCurrentSection = degreesInASection - consumedDegrees;

            sections.push(
              Object.assign(
                {}, section, { degree: remainingDegreesInCurrentSection, color }
              ),
              Object.assign(
                {}, section, { degree: degree - remainingDegreesInCurrentSection, color }
              )
            );
          }
          else {
            sections.push(Object.assign({}, section, { degree, color }));
          }

          consumedDegrees += degree;

          if (consumedDegrees >= degreesInASection) {
            consumedDegrees -= degreesInASection;
          }
        });
      });
      return sections;
    },
    legend() {
      if (!this.hasLegend) return null;
      let currentDefaultColorIdx = 0;

      return this.sections.map((section, idx) => ({
        label: section.label || `Section ${idx + 1}`,
        percent: `${section.value} (${(section.value / this.total) * 100}%)`,
        styles: {
          backgroundColor: section.color || defaultColors[currentDefaultColorIdx++]
        }
      }));
    },
    placementStyles() {
      if (!this.hasLegend) return {};
      return placementStyles[this.legendPlacement];
    },
    donutStyles() {
      const width = `${this.size}${this.unit}`;
      const styles = {
        height: 'auto',
        width,
        backgroundColor: this.foreground,
        paddingBottom: width
      };
      return styles;
    },
    overlayStyles() {
      const availablePercent = 100;
      const size = availablePercent - this.thickness;

      const sizePercent = `${size}%`;
      const pos = `calc(50% - ${size / 2}%)`;

      return {
        height: sizePercent,
        width: sizePercent,
        top: pos,
        left: pos,
        backgroundColor: this.background
      };
    },
    donutTextStyles() {
      const { fontSize } = this;
      return { fontSize };
    }
  },
  methods: {
    recalcFontSize() {
      const scaleDownBy = 0.08;
      let widthInPx = this.size;

      if (this.unit !== 'px') {
        if (this.donutEl) widthInPx = this.donutEl.clientWidth;
        else widthInPx = null;
      }

      this.fontSize = widthInPx ? `${(widthInPx * scaleDownBy).toFixed(2)}px` : '1em';
    }
  },
  mounted() {
    this.donutEl = this.$refs.donut;
    this.recalcFontSize();
    window.addEventListener('resize', () => {
      this.recalcFontSize();
    });
  },
  components: { DonutSections }
};
</script>
