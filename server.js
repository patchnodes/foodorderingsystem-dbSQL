const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');
const Database = require('./database');

// Serve static files from the 'public' directory
app.use(express.static(__dirname + "/public"));

// Set views directory and EJS as the view engine
app.set("views", "./views");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");

// Initialize the SQLite database
const db = new Database('./mydb.sqlite3', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the mydb.sqlite3 database.');
});

// Use bodyParser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route for displaying the homepage
app.get('/', (req, res) => {
    // Retrieve all records from the 'orders' table
    db.all('SELECT * FROM orders', (err, records) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            // Calculate total price of all orders
            let totalPrice = 0;
            records.forEach(record => {
                totalPrice += parseFloat(record.price);
            });
            // Render the index.ejs template with records and total price
            res.render('index.ejs', { layout: 'layouts/layout', records: records, totalPrice: totalPrice });
        }
    });
});

// Route for adding or updating an order
app.post('/add', (req, res) => {
    const { item, quantity, price, recordId } = req.body;
    const created_date = new Date().toISOString();

    if (recordId) {
        // If recordId exists, update the corresponding order
        const query = `UPDATE orders SET item = ?, quantity = ?, price = ?, created_date = ? WHERE id = ?`;
        const params = [item, quantity, price, created_date, recordId];

        db.run(query, params, (err) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            } else {
                res.redirect('/');
            }
        });
    } else {
        // If recordId doesn't exist, insert a new order
        const query = `INSERT INTO orders (item, quantity, price, created_date) VALUES (?, ?, ?, ?)`;
        const params = [item, quantity, price, created_date];

        db.run(query, params, (err) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            } else {
                res.redirect('/');
            }
        });
    }
});

// Route for removing an order
app.post('/remove/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM orders WHERE id = ?';

    db.run(query, [id], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json({ success: 'Record deleted' });
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Handle server termination
process.on('SIGINT', () => {
    db.close();
    console.log('Server terminated, database connection closed.');
    process.exit();
});
