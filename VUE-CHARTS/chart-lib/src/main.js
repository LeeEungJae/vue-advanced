import Vue from "vue";
import App from "./App.vue";
import ChartPlugins from "./plugins/ChartPlugins";

Vue.config.productionTip = false;

Vue.use(ChartPlugins);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
