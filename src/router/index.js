import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/cadastro",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/lista-de-compras",
    name: "purchases-list",
    component: () =>
      import(
        /* webpackChunkName: "purchases-list" */ "../views/PurchasesList.vue"
      )
  },
  {
    path: "/cadastro-de-compras",
    name: "purchases-register",
    component: () =>
      import(
        /* webpackChunkName: "purchases-register" */ "../views/PurchasesRegister.vue"
      )
  },
  {
    path: "/perfil",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
