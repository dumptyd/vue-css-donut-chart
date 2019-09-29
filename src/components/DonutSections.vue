<template>
<div class="cdc-sections" :style="containerStyles">
  <div
    class="cdc-section" v-for="(section, idx) in donutSections"
    :key="idx" :class="section.className" :style="section.sectionStyles"
    @click="emitClick(sections[idx])">
    <div class="cdc-filler" :style="section.fillerStyles" :title="section.label"></div>
  </div>
</div>
</template>

<script>
import { defaultColor } from '../utils/misc';

const sectionClass = {
  LEFT: 'cdc-section-left',
  RIGHT: 'cdc-section-right'
};

export default {
  props: {
    startAngle: { type: Number, default: 0 },
    sections: { type: Array, default: () => [] }
  },
  computed: {
    containerStyles() {
      return {
        transform: `rotate(${this.startAngle}deg)`
      };
    },
    donutSections() {
      const maxDegreesPerSection = 180;
      let degreesConsumed = 0;

      let offsetBy = 0;

      const sections = this.sections.map(section => {
        let [className, offset] = [sectionClass.RIGHT, -180];
        if (degreesConsumed >= maxDegreesPerSection) {
          [className, offset] = [sectionClass.LEFT, 180];
        }

        const degree = offset + section.degree;

        const fillerStyles = {
          backgroundColor: section.color || defaultColor,
          transform: `rotate(${degree}deg)`
        };
        const sectionStyles = { transform: `rotate(${offsetBy}deg)` };

        degreesConsumed += section.degree;
        if (degreesConsumed === 180) offsetBy = 0;
        else offsetBy += section.degree;

        return { label: section.label, className, fillerStyles, sectionStyles };
      });

      return sections;
    }
  },
  methods: {
    emitClick(section) {
      this.$emit('section-click', section.$section);
    }
  }
};
</script>
