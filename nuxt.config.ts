// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      meta: [
        { name: "theme-color", content: "#326CB3" },
      ],
      link: [
        { rel: 'icon', href: `/favicon.ico`, sizes: "48x48" },
        { rel: 'apple-touch-icon', href: `/apple-touch-icon-180x180.png` },
        { rel: "manifest", href: "/manifest.webmanifest" },
      ],
      script: [
        { src: 'https://aframe.io/releases/1.3.0/aframe.min.js' },
        { src: 'https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js' },
        { src: 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js' },
      ]
    }
  },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico"],
    client: {
      installPrompt: true,
    },
    manifest: {
      name: 'ArYoshi',
      description: "description",
      theme_color: "#ffffff",
      lang: "ja",
      short_name: "ArYoshi",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      icons: [
        {
          src: "icons/36x36.png",
          sizes: "36x36",
          type: "image/png"
        },
        {
          src: "icons/48x48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "icons/72x72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "icons/96x96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "icons/128x128.png",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: "icons/144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "icons/152x152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "icons/192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "icons/256x256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "icons/384x384.png",
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: "icons/512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },
    workbox: {
      navigateFallback: null
    },
    devOptions: {
      enabled: true,
      type: "module"
    },
    icon: {
      source: "icon.png",
    }
  },
})