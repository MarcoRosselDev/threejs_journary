// version sugerida por i.a para configurar mi proyecto vite, pero voy a hacer unas modificacion
// por que no quiero usar la carpeta src

//import { defineConfig } from 'vite'
//import liveReload from 'vite-plugin-live-reload'
//
//export default defineConfig({
//  root: 'src', // Opcional: si tu index.html está en src/
//  publicDir: '../static', // Ruta a tu carpeta static desde root
//  server: {
//    host: true,
//    open: true
//  },
//  build: {
//    outDir: '../dist',
//    emptyOutDir: true,
//    sourcemap: true
//  },
//  plugins: [
//    // Observa todos los archivos dentro de la carpeta static
//    //liveReload('../static/**/*')
//  ]
//}) 


// codigo final
import { defineConfig } from 'vite'
import liveReload from 'vite-plugin-live-reload'

export default defineConfig({
  //root: 'src', // Opcional: si tu index.html está en src/
  publicDir: './static', // Ruta a tu carpeta static desde root
  server: {
    host: true,
    open: true
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    sourcemap: true
  },
  plugins: [
    // Observa todos los archivos dentro de la carpeta static
    liveReload('./static/**/*')
  ]
})