import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'build',
    rollupOptions: {
      input: resolve(__dirname, 'index.html')
    }
  },
  plugins: [{
    name: 'copy-sales-script',
    writeBundle() {
      copyFileSync(resolve(__dirname, 'sales_script.js'), resolve(__dirname, 'build/sales_script.js'))
    }
  }],
  server: {
    port: 3000,
    open: true,
    // Handle SPA routing in development
    historyApiFallback: true
  },
  preview: {
    port: 3000,
    // Handle SPA routing in preview/production
    historyApiFallback: true
  }
})
