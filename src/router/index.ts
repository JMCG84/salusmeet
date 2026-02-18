import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "landing",
    component: () => import("../pages/Landing.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/Register.vue"),
  },
  {
    path: "/app",
    name: "home",
    component: () => import("../pages/Home.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
