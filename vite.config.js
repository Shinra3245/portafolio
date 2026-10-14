import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/\/(react|react-dom|scheduler)\//.test(id)) return 'react-vendor'
          if (/\/(gsap|animejs|@gsap)\//.test(id)) return 'motion-vendor'
          if (/\/(lottie-web|lottie-react)\//.test(id)) return 'lottie-vendor'
        },
      },
    },
  },
})
