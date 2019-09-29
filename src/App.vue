<template>
  <div id="app">
    <demo></demo>

    <footer>
      <div class="credit">
        Made with <strong>👐</strong> and <strong>⌨️</strong> by
        <a href="https://github.com/dumptyd">dumptyd</a>.
      </div>

      <badges></badges>
    </footer>
  </div>
</template>

<script>
import Demo from './components/site/Demo.vue';
import Badges from './components/site/Badges.vue';

export default {
  components: { Demo, Badges }
};
</script>
