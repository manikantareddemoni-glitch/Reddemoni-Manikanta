# Backend Development Fundamentals – Lab Coursework Repository

Welcome to the official laboratory coursework repository for **Backend Development Fundamentals**. This repository contains hands-on implementations, server architectures, RESTful APIs, and cloud deployments completed throughout the course curriculum.

---

## 👨‍🎓 Student Profile

- **Student Name:** **Reddemoni Manikanta**
- **Registration Number:** `[YOUR_REGISTRATION_NUMBER_HERE]`
- **Section:** `cse-2e`
- **Repository Name:** `Reddemoni-Manikanta`
- **Core Technologies:** Node.js, Express.js, REST APIs, Git & GitHub, Render

---

## 📂 Laboratory Coursework Index

Each laboratory assignment is maintained in its own dedicated, isolated directory with complete code, dependencies, and documentation:

| Lab # | Directory | Lab Title & Focus | Technologies | Status | Documentation |
|:---:|:---:|:---|:---|:---:|:---:|
| **Lab 01** | [`lab-01/`](./lab-01/) | **Node.js and Express Server**<br>• Native `http` server (`http-server.js`)<br>• Express REST server (`server.js`)<br>• Dynamic port handling & 404 middleware | Node.js, Express.js, Nodemon | ✅ **Completed** | [Lab 1 Readme](./lab-01/README.md) |
| *Lab 02* | `lab-02/` | *Upcoming Assignment* | *TBD* | ⏳ Pending | — |
| *Lab 03* | `lab-03/` | *Upcoming Assignment* | *TBD* | ⏳ Pending | — |

---

## 🏗️ Repository Architecture

```text
Reddemoni-Manikanta/
│
├── README.md               # Course overview, student profile, and lab directory index
│
└── lab-01/                 # Lab 1: Node.js & Express Server
    ├── server.js           # Production Express.js server with REST endpoints & 404 handler
    ├── http-server.js      # Low-level Node.js native HTTP server (port 3000)
    ├── package.json        # Dependencies manifest and npm execution scripts
    ├── package-lock.json   # Deterministic dependency lockfile
    ├── .gitignore          # Git exclusion rules (node_modules, .env, OS files)
    ├── README.md           # In-depth Lab 1 documentation, API table & deployment guide
    └── screenshots/        # Test verification and endpoint execution captures
        └── README.md       # Step-by-step guide on capturing genuine screenshots
```

---

## 🚀 Quick Start Guide

To run any lab locally on your machine:

1. **Clone this repository:**
   ```bash
   git clone https://github.com/manikantareddemoni-glitch/Reddemoni-Manikanta.git
   cd Reddemoni-Manikanta
   ```

2. **Navigate into the desired lab folder (e.g., Lab 1):**
   ```bash
   cd lab-01
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the server:**
   - Plain Node.js HTTP Server:
     ```bash
     node http-server.js
     ```
   - Express Server:
     ```bash
     npm start
     ```
   - Express Server (Development mode with auto-reload):
     ```bash
     npm run dev
     ```

---

## 🌐 Live Cloud Deployments

- **Lab 1 Deployment URL:** `[DEPLOYMENT_URL_PLACEHOLDER]` *(Hosted on Render)*

---

## 📜 Academic Integrity Statement

All work contained within this repository represents the original laboratory coursework of **Reddemoni Manikanta** in accordance with university academic integrity standards and laboratory guidelines.
