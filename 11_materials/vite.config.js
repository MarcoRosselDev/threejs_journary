import { defineConfig } from 'vite'
import liveReload from 'vite-plugin-live-reload'

export default defineConfig({
  root: 'src', // Opcional: si tu index.html está en src/
  publicDir: '../static', // Ruta a tu carpeta static desde root
  server: {
    host: true,
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  },
  plugins: [
    // Observa todos los archivos dentro de la carpeta static
    liveReload('../static/**/*')
  ]
})