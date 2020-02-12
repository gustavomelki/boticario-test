import axios from "axios";

const state = {
  cashback: "",
  list: null
};

const getters = {
  getCashback(state) {
    return state.cashback;
  },
  getPurchasesList(state) {
    return state.list;
  }
};

const mutations = {
  updateCashback: (state, data) => {
    state.cashback = data;
  },
  updatePurchasesList: (state, data) => {
    state.list = data;
  }
};

const actions = {
  setPurchasesList({ commit }) {
    console.log("Getting purchases data...");
    const path = "http://www.mocky.io/v2/5de42f403000000e009f7922";
    axios
      .get(path)
      .then(res => {
        commit("updateCashback", res.data.cashback_total);
        commit("updatePurchasesList", res.data.purchases);
        console.log("Purchases data loaded successfully!");
      })
      .catch(error => {
        console.error(error);
      });
  }
};

export default {
  actions,
  getters,
  mutations,
  state,
  namespaced: true
};
