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
] as RouteRecordRaw[];

export default routes;
