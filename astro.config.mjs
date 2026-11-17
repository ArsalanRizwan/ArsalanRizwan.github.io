// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL is the public origin. For a USERNAME.github.io repository the site
// is served from the root path, so `base` stays '/'.
const SITE_URL = process.env.SITE_URL ?? 'https://arsalanrizwan.github.io';

export default defineConfig({
  site: SITE_URL,
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
