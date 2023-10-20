import { createApp } from "vue";
import "@/assets/css/style.scss";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";
import { createRouter } from "@/router";
import ToastService from "primevue/toastservice";
import { createPinia } from "pinia";
import { createAuth0 } from "@auth0/auth0-vue";
import authConfig from "../auth_config.json";

import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";
import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: Tailwind });
app.use(ToastService);

app.use(createRouter(app));

const pinia = createPinia();
app.use(pinia);

app.use(
  createAuth0({
    domain: authConfig.domain,
    clientId: authConfig.clientId,
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: authConfig.authorizationParams.audience,
    },
  })
);

app.mount("#app");

