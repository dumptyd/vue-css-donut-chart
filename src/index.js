import Donut from './components/Donut.vue';

const DonutPlugin = {
  install(app) {
    app.component(Donut.name, Donut);
  }
};

export default DonutPlugin;
