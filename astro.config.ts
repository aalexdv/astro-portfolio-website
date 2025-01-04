import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/aalexdv/astro-portfolio-website',
  output: 'static',
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    spectre({
      name: 'Oleksii Trembach',
      openGraph: {
        home: {
          title: 'Oleksii Trembach | Personal Portfolio Website',
          description: 'Oleksii Trembach | Personal Portfolio Website'
        },
        blog: {
          title: 'Blog',
          description: 'News and guides.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'aalexdv/astro-portfolio-website',
        repositoryId: 'U_kgDOB1iBzQ',
        category: 'General',
        categoryId: 'DIC_kwDONjm3is4ClmBF',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});