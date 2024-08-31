import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

import { defineConfig, type UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import dts from 'vite-plugin-dts';

const siteBuildConfig: UserConfig['build'] = {};
const libBuildConfig: UserConfig['build'] = {
  lib: {
    entry: resolve(__dirname, 'src/lib.ts'),
    name: 'vcdonut',
    fileName: 'vcdonut',
    formats: ['es', 'umd'],
  },
  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      },
      assetFileNames: 'vcdonut.[ext]',
      // https://rollupjs.org/configuration-options/#output-exports
      exports: 'named',
    },
  },
  sourcemap: true,
};

const plugins: UserConfig['plugins'] = [vue(), VueDevTools()];
if (process.env.BUILD_TARGET === 'lib') {
  plugins.push(
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
      rollupTypes: true,
    }),
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BUILD_TARGET === 'site' ? '/vue-css-donut-chart/' : undefined,
  plugins,
  build: (() => {
    if (process.env.BUILD_TARGET === 'site') return siteBuildConfig;
    if (process.env.BUILD_TARGET === 'lib') return libBuildConfig;
    return undefined;
  })(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
