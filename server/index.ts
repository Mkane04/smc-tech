// server/index.ts
import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { Pool } from "pg"; // 1. Import du driver PostgreSQL

// ----------------------------------------------------
// CONFIGURATION DE LA BASE DE DONNÉES POSTGRESQL
// ----------------------------------------------------

const pool = new Pool({
  user: process.env.DB_USER, // smc
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE, // smc_db
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

// Test de Connexion au Démarrage
pool.connect()
  .then(client => {
    console.log(`✅ Connecté à PostgreSQL sur la base ${process.env.DB_DATABASE} !`);
    client.release();
  })
  .catch(err => {
    // Si la connexion échoue (mot de passe ou DB inexistante)
    console.error('❌ ERREUR fatale lors de la connexion à PostgreSQL:', err.stack);
  });
// ----------------------------------------------------


export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Nouvel Endpoint de Vérification DB
  app.get("/api/db-check", async (_req, res) => {
    try {
      const result = await pool.query('SELECT NOW()'); // Requête simple pour vérifier l'état
      res.json({ 
        message: "Connexion DB réussie et requête exécutée!",
        timestamp: result.rows[0].now
      });
    } catch (err) {
      // Si la requête échoue (ex: connexion perdue après le démarrage)
      console.error("Erreur d'exécution de la requête DB:", err);
      res.status(500).json({ message: "Erreur serveur lors de l'accès à la DB." });
    }
  });


  return app;
}