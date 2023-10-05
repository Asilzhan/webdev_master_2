import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/features/account/router";
import studentRoutes from "@/features/student/router";
import cabinetsRoutes from "@/features/cabinets/router";

const routes = [...authRoutes, ...studentRoutes, ...cabinetsRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
