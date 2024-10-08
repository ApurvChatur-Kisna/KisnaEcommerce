import react from '@vitejs/plugin-react-swc'
import path from "path"
import { defineConfig } from "vite"
import { VitePWA } from 'vite-plugin-pwa'


const manifestForPlugIn = {
  registerType:'autoUpdate',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"KISNA E-commerce",
    short_name:"KISNA E-com",
    description:"Diamond Jewellery",
    icons:[{
      src: '/android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    // {
    //   src: '/maskable_icon.png',
    //   sizes:'512x512',
    //   type:'image/png',
    //   purpose:'any maskable',
    // }
    ],
    theme_color:'#D3CEFE',
    background_color:'#1A0F4E',
    display:"standalone",
    scope:'/',
    start_url:"/",
    orientation:'portrait'
  }
}

export default defineConfig({
  plugins: [ react(), VitePWA(manifestForPlugIn as Object) ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
