import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";
import router from "@/router";
import ToastService from "primevue/toastservice";

import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";
import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: Tailwind });
app.use(router);
app.use(ToastService);

app.mount("#app");
