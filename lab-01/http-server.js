/**
 * ==============================================================================
 * Lab 1 – Node.js and Express Server
 * File: http-server.js
 * Student Name: Reddemoni Manikanta
 * Course: Backend Development Fundamentals
 * ==============================================================================
 * Description:
 * A foundational HTTP server created using Node.js's native/built-in 'http' module.
 * Demonstrates low-level HTTP request-response handling without third-party frameworks.
 * ==============================================================================
 */

// Step 1: Import the native Node.js 'http' module.
// No external npm package installation is needed because 'http' is built into Node.js.
const http = require('http');

// Step 2: Define the port number where the server will listen for network requests.
// 3000 is standard for local backend development.
const PORT = 3000;

// Step 3: Create the HTTP server using http.createServer().
// The callback function is executed whenever a client sends a request to the server.
// - req (IncomingMessage): Represents client's request (method, headers, url).
// - res (ServerResponse): Object used to write headers and send data back to the client.
const server = http.createServer((req, res) => {
  // Set the HTTP status code to 200 (OK) and header Content-Type to 'text/plain'.
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send "Hello" as the response body and complete the response cycle.
  res.end('Hello');
});

// Step 4: Bind the server to the port and start listening for incoming connections.
server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  Native Node.js HTTP Server is Running!`);
  console.log(`  URL: http://localhost:${PORT}`);
  console.log(`  Response: "Hello"`);
  console.log(`  Press Ctrl + C to stop the server`);
  console.log(`====================================================`);
});
