import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config.mts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        exclude: [
          ...(configDefaults.coverage.exclude || []),
          'src/components/site/**',
          'tests/**',
          'src/App.vue',
          'src/main.ts',
        ],
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
      },
    },
  }),
);
