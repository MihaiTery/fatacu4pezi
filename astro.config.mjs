// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Currently deployed to a GitHub Pages project site. Swap `site` to the
  // real custom domain (and drop `base` entirely) once fatacu4pezi.ro is
  // live — see src/data/config.ts `site.url` for the intended production
  // domain, which is kept separate from this deploy-target value on purpose.
  site: 'https://mihaitery.github.io',
  base: '/fatacu4pezi',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});