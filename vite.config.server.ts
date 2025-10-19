// vite.config.server.ts
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// Configuration pour la build serveur Node.js (SSR)
export default defineConfig({
  // 🔧 Serveur de développement (utile si tu testes localement)
  server: {
    port: 8080,
    fs: {
      // Autoriser l'accès à ces dossiers (pour éviter les erreurs “outside allow list”)
      allow: [
        path.resolve(__dirname),
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared"),
        path.resolve(__dirname, "src"),
      ],
    },
  },

  // 🔩 Plugins
  plugins: [react()],

  // 🏗️ Build côté serveur
  build: {
    lib: {
      entry: path.resolve(__dirname, "server/node-build.ts"), // fichier principal serveur
      name: "server",
      fileName: "production",
      formats: ["es"], // ESM pour Node moderne
    },
    outDir: "dist/server",
    target: "node20", // ✅ Compatible Node 18–22
    ssr: true,
    rollupOptions: {
      external: [
        // Modules Node natifs
        "fs",
        "path",
        "url",
        "http",
        "https",
        "os",
        "crypto",
        "stream",
        "util",
        "events",
        "buffer",
        "querystring",
        "child_process",

        // Dépendances externes non bundlées
        "express",
        "cors",
        "pg", // si tu utilises PostgreSQL
        "dotenv",
      ],
      output: {
        format: "es",
        entryFileNames: "[name].mjs",
      },
    },
    minify: false, // désactiver minification pour le debug
    sourcemap: true, // pratique pour déboguer
  },

  // 🧭 Résolution d'alias pour imports propres
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },

  // 🌍 Variables globales
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
