<template>
  <div class="badges">
    <a v-for="(badge, idx) in badges" :key="idx" class="badge" target="_blank" :href="badge.href" rel="noopener">
      <img :alt="badge.alt" :src="badge.badgeUrl" />
    </a>
  </div>
</template>

<script lang="ts" setup>
const style = 'flat-square';

const badges = [
  {
    alt: 'npm',
    badgeUrl: 'https://img.shields.io/npm/v/vue-css-donut-chart',
    href: 'https://www.npmjs.com/package/vue-css-donut-chart',
  },
  {
    alt: 'npm monthly downloads',
    badgeUrl: 'https://img.shields.io/npm/dm/vue-css-donut-chart',
    href: 'https://www.npmjs.com/package/vue-css-donut-chart',
  },
  {
    alt: 'npm bundle size',
    badgeUrl: 'https://img.shields.io/bundlephobia/minzip/vue-css-donut-chart',
    href: 'https://bundlephobia.com/result?p=vue-css-donut-chart',
  },
  {
    alt: 'Coverage status',
    badgeUrl: 'https://img.shields.io/codecov/c/gh/dumptyd/vue-css-donut-chart',
    href: 'https://codecov.io/gh/dumptyd/vue-css-donut-chart/',
  },
].map((badge) => {
  const url = new URL(badge.badgeUrl);
  url.searchParams.set('style', style);
  badge.badgeUrl = url.toString();

  return badge;
});
</script>
