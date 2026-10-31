# Lab 1 – Node.js and Express Server

> **Live Deployment URL:** `[DEPLOYMENT_URL_PLACEHOLDER]`  
> *(e.g., `https://reddemoni-manikanta-lab-01.onrender.com` once deployed on Render)*

---

## 👨‍🎓 Student Details

| Attribute | Details |
|---|---|
| **Student Name** | **Reddemoni Manikanta** |
| **Registration Number** | `[YOUR_REGISTRATION_NUMBER_HERE]` |
| **Section** | `[YOUR_SECTION_HERE]` |
| **Course** | Backend Development Fundamentals |
| **Lab Number** | Lab 1 |
| **Repository Name** | `Reddemoni-Manikanta` |

---

## 🎯 Project Objective

The primary objectives of this laboratory assignment are:
1. To understand the fundamental architecture of backend web servers using **Node.js**.
2. To build a raw HTTP server using Node.js's native `http` module and comprehend low-level request/response lifecycle mechanics.
3. To learn and implement the **Express.js** web application framework for clean routing, modular architecture, and streamlined JSON API responses.
4. To implement RESTful endpoints (`/`, `/about`, `/time`) and robust centralized **404 Not Found** middleware.
5. To configure environment-aware port listening (`process.env.PORT || 3000`) for seamless local development and cloud production deployment (such as **Render**).

---

## 🛠️ Technologies Used

- **Runtime Environment:** [Node.js](https://nodejs.org/) (v22.x LTS / v18+ compatible)
- **Framework:** [Express.js](https://expressjs.com/) (v4.x)
- **Core Modules:** Native Node.js `http` module
- **Development Tooling:** [Nodemon](https://nodemon.io/) (for live code reloading)
- **Version Control:** Git & GitHub
- **Hosting / PaaS:** [Render](https://render.com/)

---

## 📦 Understanding `package.json` Fields

The `package.json` file serves as the manifest and configuration core of any Node.js project. Here is an explanation of every field configured in this lab:

| Field | Purpose & Description in this Project |
|---|---|
| `"name"` | Unique identifier for the package (`lab-01-node-express-server`). Follows lowercase and hyphenated naming conventions. |
| `"version"` | Current semantic version of the project (`1.0.0`), denoting initial release. |
| `"description"` | Brief summary of what the project accomplishes for documentation and registry indexing. |
| `"main"` | Entry point of the application (`server.js`). This file is executed when the package is started or imported. |
| `"scripts"` | Shorthand CLI aliases for common commands: <br>• `"start"`: `node server.js` (used by production hosts like Render).<br>• `"dev"`: `nodemon server.js` (used locally for auto-restarts on code edits).<br>• `"start:http"`: `node http-server.js` (launches native HTTP server). |
| `"keywords"` | Search tags and metadata describing the technologies (`nodejs`, `express`, `backend`). |
| `"author"` | Credits the creator of the assignment (`Reddemoni Manikanta`). |
| `"license"` | Software license under which this code is published (`ISC`). |
| `"dependencies"` | Production packages strictly required at runtime (`express`). Installed during `npm install` and deployed to production. |
| `"devDependencies"` | Packages utilized strictly during local development and testing (`nodemon`). Omitted in production environments to minimize container footprint. |

---

## ⚙️ Installation & Prerequisites

### Prerequisites
Make sure **Node.js** and **npm** are installed on your machine. You can verify your installation by running:
```bash
node -v
npm -v
```

### Installation Steps
1. Navigate to the `lab-01` directory:
   ```bash
   cd lab-01
   ```
2. Install all required dependencies defined in `package.json`:
   ```bash
   npm install
   ```
   *(This generates `node_modules/` and locks package versions inside `package-lock.json`.)*

---

## 🚀 Execution Commands

You can run both the native HTTP server and the Express server depending on the lab requirement:

### 1. Plain Node.js HTTP Server
```bash
node http-server.js
```
*or via npm:*
```bash
npm run start:http
```
- Listens on: `http://localhost:3000`
- Response: Returns plain text `"Hello"`.

### 2. Express Server (Standard Production Mode)
```bash
npm start
```
- Listens on: `http://localhost:3000` (or `process.env.PORT`)
- Runs `node server.js`.

### 3. Express Server (Development Mode with Auto-Reload)
```bash
npm run dev
```
- Uses `nodemon` to watch file changes and automatically reload the server whenever `server.js` is saved.

---

## 🔍 Comparative Analysis: Plain Node.js HTTP Server vs. Express.js

| Architectural Feature | Plain Node.js (`http.createServer`) | Express.js (`express()`) |
|---|---|---|
| **Underlying Layer** | Core low-level runtime module (`http`). | Higher-level abstraction built on top of Node.js `http`. |
| **Routing Mechanism** | Requires manual parsing of `req.url` and `req.method` using `if-else` or `switch` blocks. | Declarative, intuitive route methods like `app.get()`, `app.post()`, and parameter routing (`/users/:id`). |
| **Middleware Support** | No native middleware pipeline; requires custom callback chaining. | Powerful built-in middleware engine supporting global, route-specific, and error-handling middleware. |
| **Response Utilities** | Must manually set headers (`writeHead`) and serialize JSON (`JSON.stringify()`). | Built-in helper functions like `res.json()`, `res.send()`, and `res.status()`. |
| **Error & 404 Handling** | Manual condition matching; easy to leave requests hanging without `.end()`. | Catch-all middleware (`app.use()`) handles unknown routes and centralized error middleware catches runtime bugs. |
| **Code Maintainability** | Verbose and repetitive for medium-to-large projects. | Highly clean, modular, scalable, and industry-standard. |

---

## 📡 REST API Endpoint Documentation

The Express server exposes the following endpoints:

| HTTP Method | Route Path | Expected HTTP Status | Description & Output Format | Sample Response / Expected Output |
|---|---|---|---|---|
| `GET` | `/` | `200 OK` | Welcome message verifying that the server is operational. Plain text or greeting. | `Welcome to Backend Development Fundamentals - Lab 1 Express Server!` |
| `GET` | `/about` | `200 OK` | Returns developer and student metadata in structured JSON format. | `{"studentName": "Reddemoni Manikanta", "registrationNumber": "[YOUR_REGISTRATION_NUMBER_HERE]", "section": "cse-2e"}` |
| `GET` | `/time` | `200 OK` | Returns current server date, UTC timestamp, and human-readable time string. | `{"currentTime": "2026-11-01T00:10:00.000Z", "humanReadableTime": "Sun Nov 01 2026...", "timestamp": 1793472000000}` |
| `GET` | `/unknown` *(or any invalid route)* | `404 Not Found` | Global 404 catch-all middleware returning error JSON message. | `{"message": "Route not found"}` |

---

## 🖼️ Endpoint Verification Screenshots

> ⚠️ **Instructions for the Student:**  
> Follow the instructions in [`screenshots/README.md`](screenshots/README.md) to capture genuine screenshots from your machine or cloud deployment, and place them in the `screenshots/` directory with the matching filenames below.

### 1. Home Endpoint (`GET /`)
![Home Endpoint](screenshots/01-home-endpoint.png)
*Displays HTTP 200 OK status and welcome text.*

---

### 2. About Endpoint (`GET /about`)
![About Endpoint](screenshots/02-about-endpoint.png)
*Displays student name "Reddemoni Manikanta" and section details in formatted JSON.*

---

### 3. Time Endpoint (`GET /time`)
![Time Endpoint](screenshots/03-time-endpoint.png)
*Displays current server date, ISO timestamp, and milliseconds since epoch.*

---

### 4. Unknown Route Endpoint (`GET /unknown`)
![Unknown Endpoint 404](screenshots/04-unknown-endpoint.png)
*Displays HTTP 404 Not Found status with JSON `{ "message": "Route not found" }`.*

---

## 🛡️ Problems Faced and Solutions

During the implementation and testing of this lab, several key engineering challenges and common student hurdles were encountered and resolved:

### 1. Hardcoded Port vs. Cloud Deployment Failures
- **Problem:** Hardcoding `const PORT = 3000;` works seamlessly on `localhost`, but causes hosting platforms like Render to fail because cloud providers dynamically allocate an arbitrary port via environment variables.
- **Solution:** Configured dynamic port assignment using `const PORT = process.env.PORT || 3000;`. This ensures the application adheres to Twelve-Factor App methodology while still allowing smooth local fallback.

### 2. 404 Catch-All Middleware Placement
- **Problem:** If the 404 middleware `app.use((req, res) => { ... })` is placed before the route declarations (`app.get(...)`), every valid request gets intercepted and returns 404 prematurely.
- **Solution:** Positioned the 404 catch-all middleware as the very last handler in `server.js`, immediately after all valid route definitions. In Express, middleware executes sequentially from top to bottom.

### 3. Missing MIME Type / Content-Type in Native HTTP Server
- **Problem:** In `http-server.js`, sending a response without setting headers can cause clients to misinterpret the data format or default to quirks mode.
- **Solution:** Added `res.writeHead(200, { 'Content-Type': 'text/plain' })` prior to `res.end('Hello')` to strictly define the HTTP response specification.

### 4. Git Ingestion of `node_modules`
- **Problem:** The `node_modules/` folder contains hundreds of third-party files that should never be pushed to version control due to repository bloat and platform incompatibilities.
- **Solution:** Created a `.gitignore` file explicitly excluding `node_modules/`, `.env`, and OS cache files before staging Git commits.

---

## 🏁 Conclusion

In this lab, we successfully designed, developed, and tested:
1. A foundational low-level Node.js HTTP server demonstrating direct TCP/HTTP stream manipulation.
2. A scalable, production-ready Express.js server featuring clean REST API endpoints, standard JSON output, explicit HTTP 200 status codes, and robust 404 error routing.
3. A cloud-ready architecture configured with dynamic environment port variables (`process.env.PORT`) ready for 1-click deployment on platforms like Render.
4. Comprehensive documentation conforming to academic and industry best practices.
