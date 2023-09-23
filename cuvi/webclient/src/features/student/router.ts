const routes = [
  {
    name: "StudentMainPage",
    path: "/home",
    component: () => import("@/features/student/pages/StudentMainPage.vue"),
  },
  {
    name: "StudentSchedulePage",
    path: "/home",
    component: () => import("@/features/student/pages/StudentSchedulePage.vue"),
  },
];

export default routes;
