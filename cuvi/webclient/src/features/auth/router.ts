const routes = [
  {
    name: "SignIn",
    path: "/sign-in",
    component: () => import("@/features/auth/pages/SignInPage.vue"),
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: () => import("@/features/auth/pages/SignUpPage.vue"),
  },
];

export default routes;
