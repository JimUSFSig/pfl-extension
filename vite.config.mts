import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { crx } from '@crxjs/vite-plugin';
import { resolve } from 'path';
import manifest from './public/manifest.json';


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background.ts'),
        // popup: resolve(__dirname, 'src/popup.ts')
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
    crx({ manifest })
  ]
});