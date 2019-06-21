// We load the router in our main Vue instance inside the main.js file

import Vue from "vue";
import App from "./App.vue";
// load the router.js and store.js
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
