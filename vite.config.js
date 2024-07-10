import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://christopher-cornet.github.io/OC-P12/",
  plugins: [react()],
})
