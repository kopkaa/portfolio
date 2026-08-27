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
  //   Rubik        500/600/800 (.page-title uses 800, blockquote 600)
  //   Rethink Sans 400/600/800 (nav 400, logo 600, headings 800) — this face
  //                was never actually loaded before, so `font-rethink` had
  //                been silently falling back to sans-serif
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Public Sans',
      cssVariable: '--font-public-sans',
      weights: [400, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Rubik',
      cssVariable: '--font-rubik',
      weights: [500, 600, 800],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Rethink Sans',
      cssVariable: '--font-rethink-sans',
      weights: [400, 600, 800],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
