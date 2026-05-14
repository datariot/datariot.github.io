import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://datariot.io',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
