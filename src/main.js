import { createApp, h } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import money from "v-money";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugins/fontawesome";

const app = createApp({
  render: () => h(App),
  productionTip: false,
})
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .use(router)
  .use(store)
  .use(money, { precision: 2 })
  .mount("#app");
