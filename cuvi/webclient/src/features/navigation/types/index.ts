import type { RouteRecordRaw } from "vue-router";

export type MenuRoot = {
  title: string;
  menuItems: MenuItem[];
};

export type MenuItem = {
  name: string;
  route?: RouteRecordRaw;
  title: string;
};
