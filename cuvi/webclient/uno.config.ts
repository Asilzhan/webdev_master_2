import { defineConfig, presetUno, presetTypography } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetUno({
      theme: {
        colors: {
          primary: "#715aff",
          "tropical-indigo": "#a682ff",
          "medium-slate-blue": "#715aff",
          "cornflower-blue": "#5887ff",
          "maya-blue": "#55c1ff",
          "prussian-blue": "#102e4a",
        },
      },
    }),
    presetTypography(),
  ],
  content: {
    pipeline: { include: ["./index.html", "**/*.{vue,ts,js}"] },
  },
  transformers: [transformerDirectives()],
});
