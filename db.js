const sqlite3 = require("sqlite3").verbose()

const dbPath = "decks.db"

const db = new sqlite3.Database(dbPath, err => {
    if (err) {
        console.error("Error connecting to the database: ", err.message)
    } else {
        console.log("Connected to the database.")
    }
})

process.on("SIGINT", () => {
    db.close(err => {
        if (err) {
            console.error("Error closing the database: ", err.message)
        } else {
            console.log("Database closed successfully.")
        }
        process.exit(0)
    })
})

module.exports = db