import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: false,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GiphyClipsUI',
      fileName: format => `giphy-clips-ui.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        'vueRouter',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dtsPlugin({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
