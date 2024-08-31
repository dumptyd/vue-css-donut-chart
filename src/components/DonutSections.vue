<template>
  <div class="cdc-sections" :style="containerStyles">
    <div
      v-for="(section, idx) in chunkedSectionsWithRenderData"
      :key="idx"
      class="cdc-section"
      :class="section.className"
      :style="section.sectionStyles"
      v-on="section.listeners"
    >
      <div class="cdc-filler" :style="section.fillerStyles" :title="section.baseSection.label || ''"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type StyleValue } from 'vue';
import type { DonutSection } from '@/utils/types';
import { toPrecise } from '@/utils/misc';
import { getDefaultColorDispatcher } from '@/utils/colors';

export interface Props {
  sections: DonutSection[];
  startAngle: number;
  total: number;
}

export interface Emits {
  (e: 'section-click', data: { section: DonutSection; event: MouseEvent }): void;
  (e: 'section-mouseenter', data: { section: DonutSection; event: MouseEvent }): void;
  (e: 'section-mouseleave', data: { section: DonutSection; event: MouseEvent }): void;
  (e: 'section-mouseover', data: { section: DonutSection; event: MouseEvent }): void;
  (e: 'section-mouseout', data: { section: DonutSection; event: MouseEvent }): void;
  (e: 'section-mousemove', data: { section: DonutSection; event: MouseEvent }): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const containerStyles = computed<StyleValue>(() => ({
  transform: `rotate(${props.startAngle}deg)`,
}));

type ChunkedSection = {
  baseSection: DonutSection;
  degree: number;
  color: string;
};

type ChunkedSectionWithRenderData = ChunkedSection & {
  className: string;
  fillerStyles: { backgroundColor: string; transform: string };
  sectionStyles: { transform: string };
  listeners: {
    click: (e: MouseEvent) => void;
    mouseenter: (e: MouseEvent) => void;
    mouseleave: (e: MouseEvent) => void;
    mouseover: (e: MouseEvent) => void;
    mouseout: (e: MouseEvent) => void;
    mousemove: (e: MouseEvent) => void;
  };
};

enum SectionClass {
  LEFT = 'cdc-section-left',
  RIGHT = 'cdc-section-right',
}

const chunkedSectionsWithRenderData = computed<ChunkedSectionWithRenderData[]>(() => {
  const DEGREES_IN_A_CIRCLE = 360;
  const MAX_DEGREES_PER_SECTION = 180;

  let consumedDegrees = 0;
  const getNextDefaultColor = getDefaultColorDispatcher();

  // chunk sections that overlap both sides into smaller ones and assign colors
  const chunkedSections: Array<ChunkedSection> = [];
  props.sections.forEach((section) => {
    const valToDeg = toPrecise(DEGREES_IN_A_CIRCLE * (section.value / (props.total || 1)));
    const color = section.color || getNextDefaultColor();

    const consumedWithCurrent = toPrecise(consumedDegrees + valToDeg);
    if (consumedWithCurrent > MAX_DEGREES_PER_SECTION) {
      const remainingDegreesInCurrent = toPrecise(MAX_DEGREES_PER_SECTION - consumedDegrees);
      const remainingDegreesInNext = toPrecise(valToDeg - remainingDegreesInCurrent);

      chunkedSections.push(
        { baseSection: section, degree: remainingDegreesInCurrent, color },
        { baseSection: section, degree: remainingDegreesInNext, color },
      );
    } else {
      chunkedSections.push({ baseSection: section, degree: valToDeg, color });
    }

    consumedDegrees = consumedWithCurrent;
    if (consumedDegrees >= MAX_DEGREES_PER_SECTION) {
      consumedDegrees = toPrecise(consumedDegrees - MAX_DEGREES_PER_SECTION);
    }
  });

  const ret: Array<ChunkedSectionWithRenderData> = [];

  consumedDegrees = 0;
  let offsetBy = 0;
  chunkedSections.forEach((section) => {
    if (section.degree === 0) return;

    let [className, offset] = [SectionClass.RIGHT, -180];
    if (consumedDegrees >= MAX_DEGREES_PER_SECTION) {
      [className, offset] = [SectionClass.LEFT, 180]; // rendering on the left half of the donut
    }

    const fillerStyles = {
      backgroundColor: section.color,
      transform: `rotate(${toPrecise(offset + section.degree)}deg)`,
    };

    const sectionStyles = { transform: `rotate(${offsetBy}deg)` };

    consumedDegrees = toPrecise(consumedDegrees + section.degree);
    if (consumedDegrees === MAX_DEGREES_PER_SECTION) offsetBy = 0;
    else offsetBy = toPrecise(offsetBy + section.degree);

    const listeners = {
      click: (e: MouseEvent) => emit('section-click', { section: section.baseSection, event: e }),
      mouseenter: (e: MouseEvent) => emit('section-mouseenter', { section: section.baseSection, event: e }),
      mouseleave: (e: MouseEvent) => emit('section-mouseleave', { section: section.baseSection, event: e }),
      mouseover: (e: MouseEvent) => emit('section-mouseover', { section: section.baseSection, event: e }),
      mouseout: (e: MouseEvent) => emit('section-mouseout', { section: section.baseSection, event: e }),
      mousemove: (e: MouseEvent) => emit('section-mousemove', { section: section.baseSection, event: e }),
    };

    // renders the sections with correct colors and plugs in default colors if one isn\'t specified with the "color" property renders the sections with correct colors and plugs in default colors if one isn\'t specified with the "color" property renders the sections with correct colors and plugs in default colors if one isn\'t specified with the "color" property renders the sections with correct colors and plugs in default colors if one isn\'t specified with the "color" property

    ret.push({
      baseSection: section.baseSection,

      degree: section.degree,
      color: section.color,

      className,

      fillerStyles,
      sectionStyles,

      listeners,
    });
  });

  return ret;
});
</script>
