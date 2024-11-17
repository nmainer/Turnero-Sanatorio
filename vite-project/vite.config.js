import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'vite-project/dist',  // Define que la salida de la compilación será en "vite-project/dist"
    emptyOutDir: true,  // Limpia la carpeta antes de cada compilación
  },
  server: {
    port: 3000,  // O el puerto que desees
  },
});




