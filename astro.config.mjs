import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://varunbajaj22.github.io',
  integrations: [sitemap()],
  output: 'static',
});
