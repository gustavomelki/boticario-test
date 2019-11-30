import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// change document title
router.afterEach(toRoute => {
  const appTitle = "Área do(a) Revendedor(a) - Grupo Boticário";
  const metaTitle =
    toRoute.meta && toRoute.meta.title
      ? `${toRoute.meta.title} | ${appTitle}`
      : appTitle;
  window.document.title = metaTitle;
});
