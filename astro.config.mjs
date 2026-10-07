import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.varunbajaj.me',
  integrations: [sitemap()],
  output: 'static',
});
