import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    name: "SignIn",
    path: "/sign-in",
    component: () => import("@/features/account/pages/SignInPage.vue"),
    meta: { layout: "basic" },
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: () => import("@/features/account/pages/SignUpPage.vue"),
    meta: { layout: "basic" },
  },
  {
    name: "StudentAccountPage",
    path: "/student/account",
    components: {
      default: () => import("@/features/account/pages/StudentAccountPage.vue"),
      left: () => import("@/features/navigation/components/LeftMenu.vue"),
    },
  },
] as RouteRecordRaw[];

export default routes;
