const routes = [
  {
    name: "StudentMainPage",
    path: "/student/home",
    components: {
      default: () => import("@/features/student/pages/StudentMainPage.vue"),
      left: () => import("@/features/navigation/components/LeftMenu.vue"),
    },
  },
  {
    name: "StudentMainPage",
    path: "/",
    components: {
      default: () => import("@/features/student/pages/StudentMainPage.vue"),
      left: () => import("@/features/navigation/components/LeftMenu.vue"),
    },
  },
  {
    name: "StudentSchedulePage",
    path: "/student/schedule",
    components: {
      default: () => import("@/features/student/pages/StudentSchedulePage.vue"),
      left: () => import("@/features/navigation/components/LeftMenu.vue"),
    },
  },
];

export default routes;

