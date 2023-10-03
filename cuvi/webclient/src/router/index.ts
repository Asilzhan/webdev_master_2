import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/features/account/router";
import studentRoutes from "@/features/student/router";

const routes = [...authRoutes, ...studentRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
