import axios from "axios";

const state = {
  cashback: "carregando...",
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
    const path = "http://www.mocky.io/v2/5de3e2b730000086009f78cc";
    axios.get(path).then(res => {
      commit("updateCashback", res.data.cashback_total);
      commit("updatePurchasesList", res.data.purchases);
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
