import { type Router, createRouter as createVueRouter, createWebHistory } from "vue-router";
import authRoutes from "@/features/account/router";
import studentRoutes from "@/features/student/router";
import cabinetsRoutes from "@/features/cabinets/router";
import { App } from "vue";
import { createAuthGuard } from "@auth0/auth0-vue";

export function createRouter(app: App): Router {
  const routes = [...authRoutes, ...studentRoutes, ...cabinetsRoutes];

  const router = createVueRouter({
    history: createWebHistory(),
    routes,
  });
  router.beforeResolve(createAuthGuard(app));
  return router;
}

