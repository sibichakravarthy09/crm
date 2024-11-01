const express = require('express');
const db = require('./db/config');
const route = require('./controllers/route');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Set up Express app
const app = express();
const port = process.env.PORT; // Use Render-provided PORT

// Middleware
app.use(bodyParser.json());

// Set up CORS
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

// API Routes
app.use('/api', route);

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to my world...');
});




// Start the server
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Connect to MongoDB
const DATABASE_URL = process.env.DB_URL;
const DATABASE = process.env.DB;

// Call the database connection function
db(DATABASE_URL, DATABASE);
