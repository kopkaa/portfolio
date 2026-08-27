import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jhromadka.dev',
  compressHTML: true,
  integrations: [sitemap()],

  // Self-hosted via astro:fonts — no request to fonts.googleapis.com, no
  // render-blocking <link>, no FOUT hack. Weights are exactly what the
  // stylesheets ask for:
  //   Public Sans  400/700 + italic (markdown emphasis renders <em>)
  //   Rubik        500/600 — matching what the old Google URL actually served
  //
  // Rethink Sans is deliberately NOT here: it was declared in the old
  // tailwind.config and used via `font-rethink`, but never present in the
  // Google Fonts URL, so it always fell back to the generic sans-serif. That
  // fallback is the look the site was designed around, so loading the real
  // face would be a redesign, not a fix. See --font-rethink in global.css.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Public Sans',
      cssVariable: '--font-public-sans',
      subsets: ['latin', 'latin-ext'],
      weights: [400, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Rubik',
      cssVariable: '--font-rubik',
      subsets: ['latin', 'latin-ext'],
      weights: [500, 600],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
