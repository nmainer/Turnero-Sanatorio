
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',  // Aquí defines que la salida de la compilación se guardará en la carpeta "dist"
    emptyOutDir: true,  // Esto asegura que la carpeta "dist" se limpie antes de cada build
  },
  server: {
    // Aquí puedes configurar el puerto o las opciones del servidor para desarrollo
    port: 3000,
  },
});



