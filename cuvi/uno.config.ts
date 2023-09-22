import { defineConfig, presetUno, presetTypography } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, "src/**/*.{js,ts,vue}", "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"],
    },
    filesystem: ["./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"],
  },
});
