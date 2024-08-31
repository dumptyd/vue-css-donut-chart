<template>
  <div id="app">
    <donut-demo></donut-demo>

    <footer>
      <div class="credit">Created by <a href="https://dumptyd.github.io/">dumptyd</a>.</div>

      <project-badges></project-badges>
    </footer>
  </div>
</template>

<script setup lang="ts">
import DonutDemo from '@/components/site/ProjectDemo.vue';
import ProjectBadges from '@/components/site/ProductBadges.vue';
</script>
