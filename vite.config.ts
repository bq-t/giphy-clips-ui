import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: false,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GiphyClipsUI',
      formats: ['es', 'umd'],
      fileName: format => `giphy-clips-ui.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: resolve(__dirname, 'src'),
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.ts'],
      outDir: 'dist/types',
      rollupTypes: true,
      staticImport: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
