import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': process.env.VITE_PROXY_URL,
    },
  },
  plugins: [react()],
})
