const routes = [
  {
    name: "StudentMainPage",
    path: "/student/home",
    component: () => import("@/features/student/pages/StudentMainPage.vue"),
  },
  {
    name: "StudentSchedulePage",
    path: "/student/schedule",
    component: () => import("@/features/student/pages/StudentSchedulePage.vue"),
  },
];

export default routes;
