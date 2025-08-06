import {type SQLiteDatabase} from "expo-sqlite"

export async function migrate(database: SQLiteDatabase) {
    await database.execAsync(`PRAGMA foreign_keys = ON;`);

    await database.execAsync(`
    CREATE TABLE IF NOT EXISTS targets(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        amount REAL NOT NULL,
        created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

    await database.execAsync(`
    CREATE TABLE IF NOT EXISTS transactions(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        target_id INTEGER NOT NULL,
        amount REAL NOT NULL,
        observation TEXT NULL,
        created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_target_transactions FOREIGN KEY (target_id) REFERENCES targets(id) ON DELETE CASCADE
    );
  `);
}
