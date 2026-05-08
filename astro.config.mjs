// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";
import starlightThemeMdbook from "starlight-theme-mdbook";
import starlightObsidian, { obsidianSidebarEntries } from "starlight-obsidian";

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
      plugins: [
        starlightThemeMdbook(),
        starlightObsidian({
          vault: "./posts",
          copyFrontmatter: "starlight",
        }),
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/TProgramer",
        },
      ],
      sidebar: [
        {
          label: "Tech",
          items: [obsidianSidebarEntries],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
