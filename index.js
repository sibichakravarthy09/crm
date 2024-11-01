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
app.use(cors({
    origin: 'https://dashing-parfait-fb2515.netlify.app', // Replace with the frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

// API Routes
app.use('/api', route);

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to my world...');
});

// Optional: Function to delete the ./uploads folder (uncomment if needed)
// const removeFolderRecursive = (folderPath) => {
//     if (fs.existsSync(folderPath)) {
//         fs.readdirSync(folderPath).forEach(file => {
//             const curPath = path.join(folderPath, file);
//             if (fs.lstatSync(curPath).isDirectory()) {
//                 removeFolderRecursive(curPath); // Recursive call for subdirectories
//             } else {
//                 fs.unlinkSync(curPath); // Delete file
//             }
//         });
//         fs.rmdirSync(folderPath); // Remove empty directory
//         console.log(`Folder ${folderPath} and its contents have been removed.`);
//     }
// };

// Start the server
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Connect to MongoDB
const DATABASE_URL = process.env.DB_URL;
const DATABASE = process.env.DB;

// Call the database connection function
db(DATABASE_URL, DATABASE);
