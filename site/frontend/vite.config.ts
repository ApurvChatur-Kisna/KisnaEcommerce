import react from '@vitejs/plugin-react-swc'
import path from "path"
import { defineConfig } from "vite"
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      manifest: {
        // "registerType": 'autoUpdate',
        "name":"Abol",
        "short_name":"Abol",
        "display": "standalone",
        "background_color": "#4A274F",
        "theme_color": "#4A274F",
        "icons":[
          {
            src: "favicon.ico",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "favicon.ico",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      } ,
      registerType: 'autoUpdate',
      // devOptions: {
      //   enabled: true
      // } 
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
