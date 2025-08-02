import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import webExtension from 'vite-plugin-web-extension';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background.ts'),
        popup: resolve(__dirname, 'src/popup.ts')
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  },
    plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'public/*',
          dest: '.' // Copy into root of dist/
        }
      ]
    }),
      webExtension({
        manifest: './src/manifest.json', // or wherever your source manifest is
        assets: 'icons',                // optional: folder for icons or static files
        useDynamicUrl: false             // optional: avoid using dynamic URLs in dev
        })
  ]
});