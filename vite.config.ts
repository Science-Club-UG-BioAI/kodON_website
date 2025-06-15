import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/kodON_website/',
  plugins: [
    tailwindcss(),
  ],
})