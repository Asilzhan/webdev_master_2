import { createApp } from "vue";
import "@/assets/css/style.scss";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";
import router from "@/router";
import ToastService from "primevue/toastservice";
import { createPinia } from "pinia";

import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";
import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: Tailwind });
app.use(ToastService);

app.use(router);

const pinia = createPinia();
app.use(pinia);

app.mount("#app");
