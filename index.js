const express = require('express');
const db = require('./db/config');
const route = require('./controllers/route');
const userRoutes = require('./controllers/user/_routes'); // Ensure the correct path
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config(); // Load environment variables

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(bodyParser.json());

// CORS Configuration
const allowedOrigins = [
  'https://crm-realestate.netlify.app',
  'http://localhost:3000',
];

const corsOptions = {
  origin: (origin, callback) => {
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
app.options('*', cors(corsOptions)); // Handle preflight requests

// Routes
app.use('/user', userRoutes); // User-related routes
app.use('/api', route); // General API routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to my world...');
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Database Connection
const DATABASE_URL = process.env.DB_URL;
const DATABASE_NAME = process.env.DB;

db(DATABASE_URL, DATABASE_NAME)
  .then(() => console.log('✅ Database connection successful'))
  .catch((error) => {
    console.error('❌ Database connection error:', error.message);
    process.exit(1); // Exit if database connection fails
  });

// Start the server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// Handle server startup errors
server.on('error', (err) => {
  console.error('❌ Failed to start server:', err.message);
});
