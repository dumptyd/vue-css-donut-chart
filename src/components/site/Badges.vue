<template>
  <div class="badges">
    <a
      v-for="(badge, idx) in badges" :key="idx"
      class="badge" target="_blank" :href="badge.href" rel="noopener">
      <img :alt="badge.alt" :src="badge.badgeUrl">
    </a>
  </div>
</template>

<script>
const style = 'flat-square';

const badges = [
  {
    alt: 'npm',
    badgeUrl: 'https://img.shields.io/npm/v/vue-css-donut-chart/next',
    href: 'https://www.npmjs.com/package/vue-css-donut-chart/v/next'
  },
  {
    alt: 'npm monthly downloads',
    badgeUrl: 'https://img.shields.io/npm/dm/vue-css-donut-chart',
    href: 'https://www.npmjs.com/package/vue-css-donut-chart/v/next'
  },
  {
    alt: 'npm bundle size',
    badgeUrl: 'https://img.shields.io/bundlephobia/minzip/vue-css-donut-chart@next',
    href: 'https://bundlephobia.com/result?p=vue-css-donut-chart@next'
  },
  {
    alt: 'GitHub Actions status',
    // eslint-disable-next-line max-len
    badgeUrl: 'https://img.shields.io/endpoint.svg?url=https://actions-badge.atrox.dev/dumptyd/vue-css-donut-chart/badge&label=tests&logo=none&ref=next',
    href: 'https://actions-badge.atrox.dev/dumptyd/vue-css-donut-chart/goto?ref=next'
  },
  {
    alt: 'Coverage status',
    badgeUrl: 'https://img.shields.io/codecov/c/gh/dumptyd/vue-css-donut-chart/next',
    href: 'https://codecov.io/gh/dumptyd/vue-css-donut-chart/branch/next'
  },
  {
    alt: 'Snyk Vulnerabilities for npm package',
    badgeUrl: 'https://img.shields.io/snyk/vulnerabilities/npm/vue-css-donut-chart@^2',
    href: 'https://snyk.io/vuln/npm:vue-css-donut-chart'
  }
].map(badge => {
  const suffix = badge.badgeUrl.includes('?') ? '&style=' : '?style=';
  badge.badgeUrl = `${badge.badgeUrl}${suffix}${style}`;
  return badge;
});

export default {
  data() {
    return {
      badges
    };
  }
};
</script>
