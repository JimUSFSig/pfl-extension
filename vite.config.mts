import fs from 'fs';
import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest.json';
import { resolve } from 'path';

// Enhanced logging
// console.log('=== VITE CONFIG DEBUG ===');
// console.log('__dirname:', __dirname);
// console.log('process.cwd():', process.cwd());

// Check if files exist
// const bgPath = resolve(__dirname, 'src/background.ts');
// const popupPath = resolve(__dirname, 'src/popup.html');
// const manifestPath = resolve(__dirname, 'src/manifest.json');

// console.log('\n=== FILE EXISTENCE CHECKS ===');
// console.log('Background path:', bgPath);
// console.log('Background exists:', fs.existsSync(bgPath));
// console.log('Popup path:', popupPath);
// console.log('Popup exists:', fs.existsSync(popupPath));
// console.log('Manifest path:', manifestPath);
// console.log('Manifest exists:', fs.existsSync(manifestPath));

// Check directory contents
// console.log('\n=== DIRECTORY CONTENTS ===');
// try {
//   const srcContents = fs.readdirSync(resolve(__dirname, 'src'));
//   console.log('src/ directory contents:', srcContents);
// } catch (err) {
//   console.error('Error reading src directory:', err.message);
// }

// try {
//   const rootContents = fs.readdirSync(__dirname);
//   console.log('Root directory contents:', rootContents);
// } catch (err) {
//   console.error('Error reading root directory:', err.message);
// }

// Log manifest contents
// console.log('\n=== MANIFEST ANALYSIS ===');
// console.log('Full manifest object:', JSON.stringify(manifest, null, 2));
// console.log('Manifest background:', manifest.background);

// Try different path variations
// console.log('\n=== PATH VARIATIONS ===');
const pathVariations = [
  'src/background.ts',
  './src/background.ts',
  resolve(__dirname, 'src/background.ts'),
  resolve(process.cwd(), 'src/background.ts')
];

// pathVariations.forEach((path, index) => {
//   console.log(`Path ${index + 1}: ${path} - exists: ${fs.existsSync(path)}`);
// });

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [
    crx({ manifest })
    // DEBUG MODE 
    // crx({ manifest }),
    // {
    //   name: 'debug-plugin',
    //   buildStart(options) {
    //     console.log('\n=== BUILD START DEBUG ===');
    //     console.log('Build input options:', options.input);
    //     console.log('Rollup input type:', typeof options.input);
    //     console.log('Rollup input value:', options.input);
    //   },
    //   resolveId(id, importer) {
    //     if (id.includes('background')) {
    //       console.log('\n=== RESOLVE ID DEBUG ===');
    //       console.log('Trying to resolve:', id);
    //       console.log('Imported from:', importer);
    //     }
    //     return null;
    //   }
    // }
  ],
  // Add resolve alias for debugging
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});