const express = require('express');
const db = require('./db/config');
const route = require('./controllers/route');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const userRoutes = require('./controllers/user/_routes'); // Adjust this path as necessary

// Initialize Express app
const app = express();
const port = process.env.PORT || 10000; // Use environment variable PORT, fallback to 10000

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests

const corsOptions = {
  origin: ['https://your-frontend-site.netlify.app', 'http://localhost:3000'], // List of allowed origins
  credentials: true, // Allow cookies and authorization headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

// Apply CORS settings globally
app.use(cors(corsOptions));

// Routes
app.use('/user', userRoutes); // User-related routes
app.use('/api', route); // General API routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to my world...');
});

// Enhanced error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).send({ error: 'Not Found' }); // Handle 404 errors
});

// Global error handler for unexpected errors
app.use((err, req, res, next) => {
  console.error('Server error:', err); // Log the error for debugging
  res.status(500).send({ error: 'Internal Server Error' });
});

// Database Connection
const DATABASE_URL = process.env.DB_URL;
const DATABASE = process.env.DB;

// Connect to the database
db(DATABASE_URL, DATABASE)
  .then(() => console.log('Database connection successful'))
  .catch((error) => console.error('Database connection error:', error));

// Start the server with error handling
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err); // Log server startup errors
});
