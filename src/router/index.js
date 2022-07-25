import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import External from "../views/External.vue";
import Internal from "../views/Internal.vue";

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
          title: "Acesse sua conta",
        },
      },
      {
        path: "/cadastro",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "register" */ "../views/Register.vue"),
        meta: {
          title: "Cadastro de revendedor(a)",
        },
      },
    ],
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
          title: "Suas Compras",
        },
      },
      {
        path: "/cadastro-de-compras",
        name: "purchases-register",
        component: () =>
          import(
            /* webpackChunkName: "purchases-register" */ "../views/PurchasesRegister.vue"
          ),
        meta: {
          title: "Cadastro de Compras",
        },
      },
      {
        path: "/editar-perfil",
        name: "profile",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
        meta: {
          title: "Editar Perfil",
        },
      },
    ],
  },
];

const router = new createRouter({
  history: createWebHistory(),
  base: import.meta.env.BASE_URL,
  routes,
});

// change document title
router.afterEach((toRoute) => {
  const appTitle = "Área do(a) Revendedor(a) - Grupo Boticário";
  const metaTitle =
    toRoute.meta && toRoute.meta.title
      ? `${toRoute.meta.title} | ${appTitle}`
      : appTitle;
  window.document.title = metaTitle;
});

router.beforeEach((to, from, next) => {
  store.dispatch("auth/fetchAccessToken");
  const isAuthenticated = store.state.auth.accessToken;
  console.log("to.name: ", to.path);
  if (to.path === "/" || to.name === "login" || to.name === "register") {
    if (isAuthenticated) {
      console.log("User already logged in. Redirecting to Dashboard...");
      next({ name: "dashboard" });
    } else {
      if (to.path === "/") {
        next({ name: "login" });
      }
    }
  } else {
    if (!isAuthenticated) {
      console.log("User is logged out. Redirecting to Login page...");
      next({ name: "login" });
    }
  }
  next();
});

export default router;
