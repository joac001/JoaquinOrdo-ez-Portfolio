import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://joac001.github.io/JoaquinOrdonez-Portfolio/',
  output: 'static',
  outDir: 'docs',
  integrations: [tailwind(), react()],
  build: {
    assets: 'astro'
  }
});