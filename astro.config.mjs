import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jiaan.me',
  integrations: [
    // Share-by-link drop-in pages live under /p/ and stay out of the sitemap.
    sitemap({ filter: (page) => !page.includes('/p/') }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
