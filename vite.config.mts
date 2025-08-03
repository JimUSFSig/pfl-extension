import fs from 'fs';

const bgPath = resolve(__dirname, 'src/background.ts');
if (!fs.existsSync(bgPath)) {
  throw new Error(`background.ts not found at ${bgPath}`);
}
console.log("Resolved background path:", resolve(__dirname, 'src/background.ts'));


import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest.json';
import { resolve } from 'path';

console.log('Using manifest background value:', manifest.background);

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'background.js': resolve(__dirname, 'src/background.ts'),
        'popup.html': resolve(__dirname, 'src/popup.html')
      },
      output: {
        entryFileNames: '[name]' // important — do not add `.js`
      }
    }
  },
  plugins: [crx({ manifest })]
});
