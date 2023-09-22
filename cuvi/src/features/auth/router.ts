const routes = [
  {
    name: "SignIn",
    path: "/",
    component: () => import("@/features/auth/pages/SignInPage.vue"),
  },
];

export default routes;
