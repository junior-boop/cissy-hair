import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react({
    experimentalReactChildren: true
  }), tailwind()],
  adapter: node({
    mode: "standalone"
  })
});