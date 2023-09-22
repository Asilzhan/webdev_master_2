import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/features/auth/router";

const routes = [
  ...authRoutes,
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/pages/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
