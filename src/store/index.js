import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import purchases from "./modules/purchases";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    purchases
  }
});
