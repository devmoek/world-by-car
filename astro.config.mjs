// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
    routing: {
        prefixDefaultLocale: true
    }
  },
  integrations: [tailwind()]
});