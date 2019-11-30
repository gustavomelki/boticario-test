import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
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
          import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
        meta: {
          title: "Suas Compras"
        }
      },
      {
        path: "/cadastro-de-compras",
        name: "purchases-register",
        component: () =>
          import(
            /* webpackChunkName: "purchases-register" */ "../views/PurchasesRegister.vue"
          ),
        meta: {
          title: "Cadastro de Compras"
        }
      },
      {
        path: "/editar-perfil",
        name: "profile",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
        meta: {
          title: "Editar Perfil"
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // store.dispatch("fetchAccessToken");
  const isAuthenticated = store.state.accessToken;
  if (to.name === "login" || to.name === "register") {
    if (isAuthenticated) {
      next({ name: "dashboard" });
    }
  } else {
    if (!isAuthenticated) {
      next({ name: "login" });
    }
  }
  next();
});

export default router;
