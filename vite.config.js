// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Aquí puedes añadir tus configuraciones de Vite
  // Por ejemplo, para el problema de la detección de cambios:
  server: {
    watch: {
      usePolling: true // Habilita el "polling"
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Tu página principal
        our_location: resolve(__dirname, 'our_location.html'), // Tu segunda página
        // Añade más páginas aquí si tienes:
        // pagina3: resolve(__dirname, 'pagina3.html'),
      },
    },
  },
  // O por ejemplo, para usar rutas relativas en los enlaces generados en el HTML (Te evitas problemas de rutas al desplegar en un servidor)
  base: './',
});