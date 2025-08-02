import { defineConfig } from 'vite';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest.json';
import { resolve } from 'path';


export default defineConfig({
  build: {
    // rollupOptions: {
    //   input: {
    //     background: resolve(__dirname, 'src/background.ts'),
    //     popup: resolve(__dirname, 'src/popup.ts')
    //   },
    //   output: {
    //     entryFileNames: '[name].js'
    //   }
    // },
    outDir: 'dist',
    emptyOutDir: true
  },
    plugins: [
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: 'public/*',
    //       dest: '.',
    //       structured: true
    //     },
    //     { 
    //       src: 'node_modules/webextension-polyfill/dist/browser-polyfill.min.js', 
    //       dest: '.' 
    //     }
    //   ]
    // }),
    crx({ 
      manifest,
        input: {
          background: resolve(__dirname, 'src/background.ts'),
          popup: resolve(__dirname, 'src/popup.html')
      } 
    })
  ]
});