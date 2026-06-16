// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

import { SITE_URL } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: "static",
  // Localization-ready: default locale is unprefixed; future locales add /<lang>/.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Self/cross hreflang is emitted per-page in <head>; keep sitemap lean.
      i18n: { defaultLocale: "en", locales: { en: "en-US" } },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
