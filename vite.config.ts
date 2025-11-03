import tailwindcss from '@tailwindcss/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
//import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [tailwindcss(), svelte(), /* VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'ogreticioyun',
      short_name: 'ogreticioyun',
      description: 'ogreticioyun',
      theme_color: '#ffffff',
    },

    workbox: {
      globPatterns: ['dd/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })*/]
});
