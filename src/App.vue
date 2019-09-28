<template>
  <div id="app">
    <demo></demo>

    <footer>
      <div>
        Made with <strong>👐</strong> and <strong>⌨️</strong> by
        <a href="https://github.com/dumptyd">dumptyd</a>.
      </div>

      <div class="badges">
        <a class="badge" target="_blank" href="https://github.com/dumptyd/vue-css-donut-chart/actions" rel="noopener">
          <img alt="Github Actions status" src="https://github.com/dumptyd/vue-css-donut-chart/workflows/tests/badge.svg">
        </a>
        <a class="badge" target="_blank" href="https://codecov.io/gh/dumptyd/vue-css-donut-chart" rel="noopener">
          <img alt="Coverage status" src="https://codecov.io/gh/dumptyd/vue-css-donut-chart/branch/master/graph/badge.svg">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import Demo from './components/site/Demo.vue';

export default {
  components: { Demo }
};
</script>
