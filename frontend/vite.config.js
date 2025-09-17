import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {},
  },
  plugins: [react(),tailwindcss()],
  safelist: [
    "slick-slider",
    "slick-track",
    "slick-slide",
    "slick-list",
    "slick-arrow",
    "slick-prev",
    "slick-next",
    "slick-dots",
  ],
   daisyui: {
    themes: ["light", "dark"], // you can limit to just "light" if you want
  },
})
