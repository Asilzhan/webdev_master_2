import "vue-router";
declare module "vue-router" {
  interface RouteMeta {
    allowAnonymous?: boolean;
    layout?: string;
  }
}

export default {};
