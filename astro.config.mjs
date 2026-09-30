// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages under the custom domain (set in the repo's
  // Settings → Pages), served from the domain root — no `base` needed.
  site: 'https://fatacu4pezi.ro',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});