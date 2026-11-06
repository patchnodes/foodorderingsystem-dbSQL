const sqlite3 = require('sqlite3').verbose();

class Database {
    constructor(dbPath) {
        // Constructor function to initialize the database connection
        this.db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log(`Connected to the ${dbPath} database.`);
        });
       
        // Initialize the database schema
        this.init();
    }

    // Initialize function to create the 'orders' table if it doesn't exist
    init() {
        this.db.run(`CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY,
            item TEXT,
            quantity INTEGER,
            price REAL,
            created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);
    }

    // Function to close the database connection
    close() {
        this.db.close((err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Closed the database connection.');
        });
    }

    // Function to execute a SELECT query and return a single row
    get(query, params, callback) {
        this.db.get(query, params, callback);
    }

    // Function to execute a SELECT query and return all rows
    all(query, callback) {
        this.db.all(query, callback);
    }

    // Function to execute an INSERT, UPDATE, or DELETE query
    run(query, params, callback) {
        this.db.run(query, params, callback);
    }
}

module.exports = Database;
