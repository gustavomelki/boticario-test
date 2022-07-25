import axios from "axios";
import router from "../../router";

const state = {
  accessToken: null,
  loggingIn: false,
  loginError: null,
};

const mutations = {
  loginStart: (state) => (state.loggingIn = true),
  loginStop: (state, errorMessage) => {
    state.loggingIn = false;
    state.loginError = errorMessage;
  },
  updateAccessToken: (state, accessToken) => {
    state.accessToken = accessToken;
  },
  logout: (state) => {
    state.accessToken = null;
  },
};

const actions = {
  doLogin({ commit }, loginData) {
    commit("loginStart");
    console.log("Sending data...");

    axios
      .post("https://reqres.in/api/login", {
        ...loginData,
      })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.token);
        commit("loginStop", null);
        commit("updateAccessToken", response.data.token);
        router.push({ name: "dashboard" });
        console.log(
          "%c Login ",
          "color: white; background-color: #95B46A",
          "User is logged in!"
        );
      })
      .catch((error) => {
        commit("loginStop", error.response.data.error);
        commit("updateAccessToken", null);
        console.error(error);
      });
  },
  doRegister({ commit }, data) {
    commit("loginStart");
    console.log("Sending data...");

    axios
      .post("https://reqres.in/api/register", {
        ...data,
      })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.token);
        commit("loginStop", null);
        commit("updateAccessToken", response.data.token);
        router.push({ name: "dashboard" });
        console.log(
          "%c Login ",
          "color: white; background-color: #95B46A",
          "User is logged in!"
        );
      })
      .catch((error) => {
        commit("loginStop", error.response.data.error);
        commit("updateAccessToken", null);
        console.error(error);
      });
  },
  fetchAccessToken({ commit }) {
    commit("updateAccessToken", localStorage.getItem("accessToken"));
  },
  logout({ commit }) {
    localStorage.removeItem("accessToken");
    commit("logout");
    router.push({ name: "login" });
    console.log(
      "%c Logout ",
      "color: white; background-color: #95B46A",
      "User is logged out!"
    );
  },
};

export default {
  actions,
  mutations,
  state,
  namespaced: true,
};
