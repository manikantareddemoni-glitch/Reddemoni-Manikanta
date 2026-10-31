# Lab 1 – Endpoint Verification Screenshots Guide

This directory holds the visual proof and verification screenshots required for **Lab 1: Node.js and Express Server** submission.

---

## 📸 Required Screenshots Checklist

Save all image files directly inside this `screenshots/` directory using the exact filenames listed below:

| # | Endpoint Tested | Method | Expected Status | Required Filename | Description |
|---|---|---|---|---|---|
| 1 | `http://localhost:3000/` | `GET` | `200 OK` | `01-home-endpoint.png` | Welcome message in browser/Postman |
| 2 | `http://localhost:3000/about` | `GET` | `200 OK` | `02-about-endpoint.png` | Student JSON details (`name`, `section`) |
| 3 | `http://localhost:3000/time` | `GET` | `200 OK` | `03-time-endpoint.png` | Current date and timestamp JSON |
| 4 | `http://localhost:3000/unknown` | `GET` | `404 Not Found` | `04-unknown-endpoint.png` | Custom 404 JSON error response |

> **Note:** As per academic integrity guidelines, no dummy or fake image files have been placed here. Follow the steps below to capture genuine screenshots from your machine or deployed service.

---

## 🛠️ How to Capture and Save the Screenshots

### Step 1: Start the Express Server
Open a terminal in the `lab-01` folder and start the server:
```powershell
npm start
```
You should see:
```text
Express Server is running!
Local URL: http://localhost:3000
```

---

### Step 2: Open and Test Each Endpoint

You can test either using your **Web Browser** (Chrome / Edge) or an API tool like **Postman** / **Thunder Client** in VS Code:

#### 1. Home Endpoint (`/`)
- **URL:** `http://localhost:3000/`
- **What should be visible:** The text `Welcome to Backend Development Fundamentals - Lab 1 Express Server!`
- **Capture:** Press <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> to take a snip showing the address bar and page response.
- **Save as:** `screenshots/01-home-endpoint.png`

#### 2. About Endpoint (`/about`)
- **URL:** `http://localhost:3000/about`
- **What should be visible:** JSON response with `studentName` ("Reddemoni Manikanta") and section placeholder.
- **Capture:** Press <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>.
- **Save as:** `screenshots/02-about-endpoint.png`

#### 3. Time Endpoint (`/time`)
- **URL:** `http://localhost:3000/time`
- **What should be visible:** JSON response showing `currentTime`, `humanReadableTime`, and `timestamp`.
- **Capture:** Press <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>.
- **Save as:** `screenshots/03-time-endpoint.png`

#### 4. Unknown Route Endpoint (`/unknown`)
- **URL:** `http://localhost:3000/unknown` (or any non-existent path like `/invalid-route`)
- **What should be visible:** JSON response `{"message": "Route not found"}` with HTTP status `404 Not Found` (in DevTools Console/Network tab or Postman).
- **Capture:** Press <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>.
- **Save as:** `screenshots/04-unknown-endpoint.png`

---

## 💡 Pro-Tip for Top Lab Marks
Open **Developer Tools** (<kbd>F12</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>) in your browser, switch to the **Network** tab, and refresh the page. This visibly proves the **Status 200** or **Status 404** alongside the response body!
