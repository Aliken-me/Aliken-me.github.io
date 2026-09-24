import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://aliken-me.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});