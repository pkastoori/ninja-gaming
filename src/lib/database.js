import sqllite from 'better-sqlite3';

const db = new sqllite('./dev_v2 .sqlite');

const schema = `CREATE TABLE IF NOT EXISTS guides(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL, 
    body TEXT NOT NULL
)`;

db.exec(schema);

export default db;
