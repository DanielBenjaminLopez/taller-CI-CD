import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/taller-CI-CD/", // ¡Importante! Nombre exacto de tu repositorio
  build: {
    outDir: "dist", // Carpeta de producción (opcional, ya es el valor por defecto)
    sourcemap: true, // Genera mapas de fuente para debugging (opcional)
  },
});
