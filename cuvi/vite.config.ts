import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import path from "path";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Icons({
      autoInstall: true,
    }),
    Components({
      dts: true,
      resolvers: [
        PrimeVueResolver(),
        IconsResolver({
          prefix: "i",
          enabledCollections: ["ph"],
        }),
      ],
      dirs: ["./src/**", "./src/features/**", "./src/layouts/**"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
