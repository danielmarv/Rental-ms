const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// Create connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to database
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database: ', err.stack);
        return;
    }

    console.log('Connected to database as ID: ', connection.threadId);
});

// Define routes
// const usersRouter = require('./routes/users');
// const customersRouter = require('./routes/customers');
// const rentalsRouter = require('./routes/rentals');

// app.use('/users', usersRouter);
// app.use('/customers', customersRouter);
// app.use('/rentals', rentalsRouter);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${3000}`);
}); 