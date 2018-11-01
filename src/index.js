import Donut from './components/Donut.vue';

const DonutPlugin = {
  install(Vue) {
    Vue.component(Donut.name, Donut);
  }
};

export default DonutPlugin;
