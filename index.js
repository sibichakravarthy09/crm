const express = require('express');
const db = require('./db/config');
const route = require('./controllers/route');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Set up Express app
const app = express();
const port = process.env.PORT || 10000; // Default to port 3000 if PORT is not set

// Middleware
app.use(bodyParser.json());

// Set up CORS with enhanced headers for debugging



const corsOptions = {
  origin: ['https://dashing-parfait-fb2515.netlify.app', 'http://localhost:3000'], // Add your Netlify URL here
  credentials: true,
};

app.use(cors(corsOptions));

// API Routes
app.use('/api', route);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to my world...');
});

// Start the server with enhanced error handling
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});

// Connect to MongoDB
const DATABASE_URL = process.env.DB_URL;
const DATABASE = process.env.DB;

// Call the database connection function
db(DATABASE_URL, DATABASE)
  .then(() => console.log('Database connection successful'))
  .catch((error) => console.error('Database connection error:', error));

// Enhanced route and error handling
app.use((req, res, next) => {
  res.status(404).send({ error: 'Not Found' }); // Handle 404 errors
});

app.use((err, req, res, next) => {
  console.error('Server error:', err); // Log server errors for debugging
  res.status(500).send({ error: 'Internal Server Error' });
});
