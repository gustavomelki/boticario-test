import Vue from "vue";
import VueRouter from "vue-router";
import External from "../views/External.vue";
import Internal from "../views/Internal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: External,
    children: [
      {
        path: "/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/Login.vue"),
        meta: {
          title: "Acesse sua conta"
        }
      },
      {
        path: "/cadastro",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "register" */ "../views/Register.vue"),
        meta: {
          title: "Cadastro de revendedor(a)"
        }
      }
    ]
  },
  {
    path: "/",
    component: Internal,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
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
        path: "/editar-perfil",
        name: "profile",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/Profile.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
