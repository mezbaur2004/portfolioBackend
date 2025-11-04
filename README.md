# Portfolio Backend

This is the backend service for my personal portfolio website — built using Node.js, Express, and MongoDB.
I initially created the whole system overnight, then gradually refined and optimized it over time to make it cleaner, modular, and production-ready.

## ✨ Features

-RESTful API powering the portfolio frontend

-Handles contact form submissions securely

-Proper folder structure (controllers, models, routes, middlewares)

-Environment-based configuration

-CORS setup for frontend communication

-Instantly accessible (no cold start delays)

## 📁 Project Structure
```
src/
├── controller/              # Route logic and business operations
├── middleware/              # Custom middleware for validation or security
├── model/                   # Mongoose models
├── route/                   # API routes
app.js                       # Express app setup
index.js                     # Entry point
vercel.json                  # Deployment config
```

## 🛠️ Tech Stack

Node.js

Express.js

MongoDB + Mongoose

dotenv

CORS

## ⚙️ Environment Variables

Create a .env file in the root directory with the following:

PORT=8080
MONGO_URI=...
ORIGIN=...
URL=...

## 🚀 Getting Started

1. Clone the repository:

```
git clone https://github.com/mezbaur2004/portfolioBackend.git
```
2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

The server will start at:
👉 http://localhost:8080

## 🔗 Related

Frontend Repo: mezbaur2004/portfolioFrontend
Live Site: https://mezbaur.vercel.app


## 🧑‍💻 Author

**Mezbaur Are Rafi** – [GitHub](https://github.com/mezbaur2004)
