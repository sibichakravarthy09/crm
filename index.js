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
const port = process.env.PORT || 5001; // Use the provided PORT or default to 5001

// Middleware
app.use(bodyParser.json());

// Set up CORS
const allowedOrigins = [
    'http://localhost:3000',  // Local development
    'https://dashing-parfait-fb2515.netlify.app' // Production
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// API Routes
app.use('/api', route);

// Root endpoint
app.get('/', async (req, res) => {
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
    const protocol = (process.env.HTTPS === 'true' || process.env.NODE_ENV === 'production') ? 'https' : 'http';
    const { address } = server.address();
    const host = address === '::' ? '127.0.0.1' : address;
    console.log(`Server listening at ${protocol}://${host}:${port}`);
});

// Connect to MongoDB
const DATABASE_URL = process.env.DB_URL;
const DATABASE = process.env.DB;

// Call the database connection function
db(DATABASE_URL, DATABASE);
