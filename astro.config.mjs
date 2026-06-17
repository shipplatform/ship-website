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
  // Inline page CSS into <head> so first paint isn't gated on a separate
  // render-blocking stylesheet request. The CSS is small (~7 KiB gzip) and
  // sessions are single-page, so the lost cross-page cache hit is a clear net
  // win for FCP/LCP on slow connections.
  build: { inlineStylesheets: "always" },
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
