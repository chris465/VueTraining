import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("capitalize", function(value: string) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
