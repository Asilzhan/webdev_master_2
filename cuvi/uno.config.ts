import { defineConfig, presetUno, presetTypography } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  content: {
    pipeline: { include: ["./index.html", "**/*.{vue,ts,js}"] },
  },
});
