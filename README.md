A simple full-stack interview-assistant demo: a Node.js + Express backend (API + DB + GenAI integration) and a React + Vite frontend. The backend exposes auth and interview endpoints and appears wired to Google’s GenAI SDK for generating/processing interview content; the frontend is a Vite React template intended to run on localhost:5173 and talk to the backend.

Stack
Language(s): JavaScript (Node.js) for backend and frontend
Framework / runtime: Express 5 (backend), React + Vite (frontend)
Notable libraries: @google/genai, mongoose, jsonwebtoken, bcryptjs, puppeteer (backend), zod (validation)
How it's organized
Code
Backend/                Express API, DB connection, controllers & routes
  package.json          npm scripts & dependencies
  server.js             entrypoint — loads src/app and connectToDB()
  src/
    app.js              express app, CORS (origin http://localhost:5173), route wiring
    config/             database connection (connectToDB referenced from server.js)
    controllers/        request handlers (auth, interview)
    middlewares/        auth middleware (used by /api/auth/get-me)
    models/             mongoose schemas
    routes/
      auth.routes.js    auth endpoints: /register, /login, /logout, /get-me
      interview.routes.js interview-related endpoints
    services/           business logic used by controllers

Frontend/               React + Vite app (README indicates a Vite React template)
  README.md             notes about React + Vite template and dev hints
  (typical Vite files)  (package.json, src/, etc. expected but not listed here)
How it fits together:

Backend/server.js calls connectToDB() (src/config) then starts the Express app on port 3000. src/app.js registers middleware and mounts routers from src/routes (auth and interview). Controllers live under src/controllers and call services/models to handle persistent data and to interact with the @google/genai SDK. The frontend (Vite dev server on :5173 per CORS config) talks to backend APIs under /api/*.
How to run it
Shortest path from a fresh clone (assumes Node.js installed and a MongoDB available):

Backend:

Code
cd Backend
npm install
# ensure .env contains required values (DB connection string, API keys such as Google GenAI credentials)
npm run dev   # runs: npx nodemon server.js
Frontend (typical for a Vite React app — package scripts expected in Frontend):

Code
cd Frontend
npm install
npm run dev   # starts Vite dev server on :5173
Notes:

Backend uses dotenv; you’ll need env vars (MongoDB URI and likely Google GenAI credentials and any JWT secret).
The backend listens on port 3000 and CORS allows origin http://localhost:5173 with credentials.
Try asking
Where is the DB connection implemented (which file under Backend/src/config) and which environment variables does it expect?
How is @google/genai used in the interview flow — which controller or service imports it (e.g., which file under src/services or src/controllers)?
Can# Interview AI (interview-ai-yt)
AI-assisted interview preparation app with a Node/Express backend and a Vite + React frontend. The repo includes authentication routes and interview-related APIs; the backend uses MongoDB you show the handlers wired by Backend/src/routes/interview.routes.js and the corresponding controller functions in src/controllers? and several utilities (PDF parsing, Puppeteer, a generative-AI client) while the frontend is a Vite + React SPA.

Stack
Language(s): JavaScript (Node.js + browser React)
Framework / runtime:
Backend: Node
