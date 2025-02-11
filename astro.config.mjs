import { defineConfig } from "astro/config";

import icon from "astro-icon"; // https://www.astroicon.dev/guides/upgrade/v1/
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "@playform/compress";
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.bodanuriaycristian.com/",
  integrations: [
    // example auto import component into blog post mdx files
    AutoImport({
      imports: [
        // https://github.com/delucis/astro-auto-import
        "@components/Admonition/Admonition.astro",
      ],
    }),
    mdx(),
    tailwind(),
    icon({
      // I include only the icons I use. This is because if you use SSR, ALL icons will be included (no bueno)
      // https://www.astroicon.dev/reference/configuration#include
      include: {
        tabler: [
          "bulb",
          "alert-triangle",
          "flame",
          "info-circle",
          "arrow-narrow-left",
          "arrow-narrow-right",
          "menu-2",
          "x",
          "chevron-down",
          "category",
          "calendar-event",
        ],
      },
    }),
    sitemap(),
    compress({
      HTML: true,
      JavaScript: true,
      CSS: false,
      Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
      SVG: false, // astro-icon handles this
    }),
  ],
  // get rid of Dart Sass deprecation warning
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
