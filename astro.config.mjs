import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import rehypeSlug from 'rehype-slug';
import { unified } from '@astrojs/markdown-remark';
import { userConfig } from './src/user.config.mjs';
import { scms } from '@lad-sapienza/scms-core/scms';

const coreAlias = {
  '@user': fileURLToPath(new URL('./src', import.meta.url)),
  '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
  '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
  '@content': fileURLToPath(new URL('./src/content-pages', import.meta.url)),
};

export default defineConfig({
  site: userConfig.site,
  base: userConfig.base,
  output: 'static',
  trailingSlash: 'always',

  markdown: {
    processor: unified({ rehypePlugins: [rehypeSlug] }),
  },

  integrations: [
    ...scms(),
  ],

  vite: {
    resolve: {
      alias: coreAlias,
    },
  },
});
