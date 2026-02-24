import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://davidpham5.github.io',
  integrations: [tailwind()],
});
