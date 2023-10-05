const routes = [
  {
    name: "CabinetsPage",
    path: "/cabinets",
    components: {
      default: () => import("@/features/cabinets/pages/CabinetsPage.vue"),
      left: () => import("@/features/navigation/components/LeftMenu.vue"),
    },
  },
];

export default routes;
