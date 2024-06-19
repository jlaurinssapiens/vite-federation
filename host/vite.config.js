import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    federation({
      name: 'studio',
      remotes: {
        widget: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react','react-dom', 'react-redux']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  // server is dev server DUUUH
  server: {
    port: 1337
  },
  preview: {
    port: 4444,
    strictPort: 4444
  }
})