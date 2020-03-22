import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// import SuiVue from "semantic-ui-vue";
// import "semantic-ui-css/semantic.min.css";

// import Vant from "vant";
// import "vant/lib/index.css";

Vue.config.productionTip = false;
// Vue.use(SuiVue);
// Vue.use(Vant);
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
