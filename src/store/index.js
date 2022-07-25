import { createStore } from "vuex";
import auth from "./modules/auth";
import purchases from "./modules/purchases";

const store = createStore({
  modules: {
    auth,
    purchases,
  },
});

export default store;
