import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: 'https://cissy-hair.pages.dev/',
  integrations: [mdx(), sitemap(), react({
    experimentalReactChildren: true
  }), tailwind()],
  adapter: cloudflare({ mode : "advanced"})
});