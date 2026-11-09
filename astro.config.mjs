import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { sitemapSerialize } from './src/config/sitemap.ts';

const siteUrl = (process.env.PUBLIC_SITE_URL || 'https://tarkov-cheat.com').replace(/\/$/, '');

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  site: siteUrl,
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/escape-from-tarkov-cheats/',
    '/cheats/elite/': '/products/escape-from-tarkov-cheats/elite/',
    '/cheats/compare/': '/blog/tarkov-cheats-features-guide/',
    '/contact/': '/support/',
    '/products/dota-2-cheats/': '/products/escape-from-tarkov-cheats/',
    '/products/dota-2-cheats/elite/': '/products/escape-from-tarkov-cheats/elite/',
    '/products/dota-2-cheats/utilities/': '/products/escape-from-tarkov-cheats/utilities/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
