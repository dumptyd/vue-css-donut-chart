import { type Plugin } from 'vue';
import DonutChart, { type Props as DonutChartProps, type Emits as DonutChartEmits } from '@/components/DonutChart.vue';
import type { DonutSection } from '@/utils/types';

const DonutPlugin: Plugin = {
  install(app) {
    app.component('VcDonut', DonutChart);
  },
};

export type { DonutSection, DonutChartProps, DonutChartEmits };
export { DonutChart as VcDonut };
export default DonutPlugin;
