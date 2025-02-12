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

// CORS Configuration
const allowedOrigins = [
  'https://crm-realestate.netlify.app', 
  'http://localhost:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`Blocked CORS request from origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Apply CORS settings globally
app.use(cors(corsOptions));

// Handle CORS preflight requests properly
app.options('*', cors(corsOptions));

// Ensure CORS headers in all responses
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
  }

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204); // Respond to preflight requests with 204 No Content
  }

  next();
});

// Routes
app.use('/user', userRoutes); // User-related routes
app.use('/api', route); // General API routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to my world...');
});

// Enhanced error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' }); // Handle 404 errors
});

// Global error handler for unexpected errors
app.use((err, req, res, next) => {
  console.error('Server error:', err.message); // Log error
  res.status(500).json({ error: 'Internal Server Error' });
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
  console.error('Failed to start server:', err.message);
});
