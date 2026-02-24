import type { Router } from "vue-router";
import { authService } from "../services/auth.service";

export function registerGuards(router: Router) {
  router.beforeEach((to) => {
    const session = authService.getSession();
    const isAuth = Boolean(session);

    const requiresAuth = Boolean(to.meta.requiresAuth);
    const isPublicAuthPage = to.path === "/login" || to.path === "/register";
    //si intenta acceder a privado sin sesion, lo redirige a login
    if (requiresAuth && !isAuth) {
      return { path: "/login" };
    }
    //si esta logueado y quiere ir a login o register, lo redirige a app
    if (isPublicAuthPage && isAuth) {
      return { path: "/app" };
    }
    //deja pasar
    return true;
  });
}
