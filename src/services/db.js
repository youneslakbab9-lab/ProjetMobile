import * as SQLite from 'expo-sqlite';

const getDB = async () => {
  return await SQLite.openDatabaseAsync('formations.db');
};

// 1. Initialisation de la table (Version simplifiée sans WAL)
export const initDB = async () => {
  const db = await getDB();
  // On enlève le PRAGMA qui faisait planter Android
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS formations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titre TEXT NOT NULL,
      description TEXT,
      duree TEXT
    );
  `);
};

// 2. Ajouter une formation
export const addFormation = async (titre, description, duree) => {
  const db = await getDB();
  const result = await db.runAsync(
    'INSERT INTO formations (titre, description, duree) VALUES (?, ?, ?)',
    [titre, description, duree]
  );
  return result;
};

// 3. Récupérer toutes les formations
export const getFormations = async () => {
  const db = await getDB();
  const allRows = await db.getAllAsync('SELECT * FROM formations');
  return allRows;
};