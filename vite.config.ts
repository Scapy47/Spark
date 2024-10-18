import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt", // Prompt the user to install the PWA in development
      manifest: {
        orientation : "any",
        theme_color: "#ffffff",
        background_color: "black",
        icons: [
          {
            src: "vite.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any"
          },
          {
            src: "android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          },
          // {
          //   src: "vite.svg",
          //   sizes: "any",
          //   type: "image/svg+xml",
          //   purpose: "maskable"
          // }
        ]
      },
      devOptions: {
        enabled: true // Enable PWA in development mode for localhost
      }
    })
  ],
})
