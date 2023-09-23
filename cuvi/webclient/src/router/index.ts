import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/features/auth/router";
import studentRoutes from "@/features/student/router";

const routes = [
  ...authRoutes,
  ...studentRoutes,
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
