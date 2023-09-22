import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";
import "virtual:uno.css";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: Tailwind });

app.mount("#app");
