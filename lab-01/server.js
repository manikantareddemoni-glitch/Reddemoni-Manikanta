/**
 * ==============================================================================
 * Lab 1 – Node.js and Express Server
 * File: server.js
 * Student Name: Reddemoni Manikanta
 * Registration Number: [REGISTRATION_NUMBER_PLACEHOLDER]
 * Section: cse-2e
 * Course: Backend Development Fundamentals
 * ==============================================================================
 * Description:
 * Production-ready Express.js server providing RESTful endpoints, dynamic environment
 * port handling, status 200 responses for valid routes, and a global 404 error handler.
 * ==============================================================================
 */

// Step 1: Import the Express framework.
// Express provides a robust set of features for web and mobile applications,
// simplifying routing, middleware integration, and HTTP request/response handling.
const express = require('express');

// Step 2: Initialize the Express application instance.
const app = express();

// Step 3: Define server PORT.
// Use process.env.PORT provided by hosting environments (such as Render),
// falling back to local port 3000 for development.
const PORT = process.env.PORT || 3000;

// Optional utility middleware to parse incoming JSON payloads if needed in future labs.
app.use(express.json());

// ==============================================================================
// APPLICATION ROUTES
// ==============================================================================

/**
 * Route: GET /
 * Description: Root endpoint that returns a welcoming message to verify server availability.
 * HTTP Status: 200 OK
 */
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Backend Development Fundamentals - Lab 1 Express Server!');
});

/**
 * Route: GET /about
 * Description: Returns student profile details as structured JSON.
 * HTTP Status: 200 OK
 */
app.get('/about', (req, res) => {
  res.status(200).json({
    studentName: 'Reddemoni Manikanta',
    registrationNumber: '[REGISTRATION_NUMBER_PLACEHOLDER]',
    section: 'cse-2e'
  });
});

/**
 * Route: GET /time
 * Description: Returns the current server date and time using JavaScript's new Date().
 * HTTP Status: 200 OK
 */
app.get('/time', (req, res) => {
  const now = new Date();
  res.status(200).json({
    currentTime: now.toISOString(),
    humanReadableTime: now.toString(),
    timestamp: now.getTime()
  });
});

// ==============================================================================
// 404 NOT FOUND MIDDLEWARE
// ==============================================================================

/**
 * Catch-all middleware for handling unknown or undefined routes.
 * In Express, middleware functions execute sequentially. If a request does not match
 * any of the defined routes above, this handler executes.
 * HTTP Status: 404 Not Found
 */
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

// ==============================================================================
// START THE SERVER
// ==============================================================================

// Bind and listen for connections on the specified port.
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  Express Server is running!`);
  console.log(`  Local URL:   http://localhost:${PORT}`);
  console.log(`  Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`====================================================`);
  console.log(`  Available Endpoints:`);
  console.log(`  - GET  /        -> Welcome message`);
  console.log(`  - GET  /about   -> Student details (JSON)`);
  console.log(`  - GET  /time    -> Current date & time (JSON)`);
  console.log(`  - GET  /unknown -> 404 Route not found (JSON)`);
  console.log(`====================================================`);
});

// Export the app instance for automated testing or modular extensions
module.exports = app;
