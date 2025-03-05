import { Database } from "sqlite3"

const sqlite = require("sqlite3").verbose()
const filepath = "./base.db"

function createDbConnection() {
    const db = new sqlite.Database(filepath, (error) => {
        if (error) {
            return console.error(error.message)
        }
        createTable(db)
    })

    console.log("Connection with SQLite has been established")
    return db
}

function createTable(db: Database) {
    db.exec(`
        CREATE TABLE songs (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR(50) NOT NULL,
            author VARCHAR(50) NOT NULL
        );
    `)
}

module.exports = createDbConnection