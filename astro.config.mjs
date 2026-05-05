// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";
import starlightThemeMdbook from "starlight-theme-mdbook";

// https://astro.build/config
export default defineConfig({
  site: "https://tprogramer.github.io",
  integrations: [
    starlight({
      title: "개발 고민 생각\n저장소",
      components: {
        Header: "./src/components/Header.astro",
      },
      customCss: ["./src/styles/global.css"],
      plugins: [starlightThemeMdbook()],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/TProgramer",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
