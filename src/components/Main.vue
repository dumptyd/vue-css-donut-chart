<template>
<div>
  <Donut
      :thickness="20" :size="50" unit="%"  :sections="dSections"
      hasLegend legendPlacement="bottom" :total="200"
      style="width: 400px; font-size: 16px;"
  >
    <big><strong>1450</strong></big>
    <br>
    <span>quantity consumed</span>
  </Donut>
</div>

</template>

<script>
import Donut from './Donut.vue';

export default {
  data() {
    return {
      dSections: [
        { value: '10' },
        { value: '20' },
        { value: '30' },
        { value: '40' },
        { value: '40' },
        { value: '30' },
        { value: '20' },
        { value: '10' }
      ]
    };
  },
  components: { Donut }
};
</script>
