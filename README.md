# Express + Drizzle ORM + MySQL Starter Template

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-5.x-blue.svg)](https://expressjs.com/)
[![Drizzle ORM](https://img.shields.io/badge/drizzle--orm-latest-C5F74F.svg)](https://orm.drizzle.team/)
[![MySQL](https://img.shields.io/badge/mysql-8.x-orange.svg)](https://www.mysql.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A minimal, clean, and beginner-friendly REST API template built with **Express 5**, **Drizzle ORM**, and **MySQL**.

---

## 📁 Project Structure

```text
express-drizzle-mysql/
├── drizzle/                     # Drizzle Kit generated migrations & schema snapshots
├── src/
│   ├── db/
│   │   ├── db.js                # MySQL pool & Drizzle ORM connection
│   │   └── schema.js            # Drizzle table schemas
│   ├── routes/
│   │   └── users.js             # User CRUD router
│   └── index.js                 # Server entry point & route mounting
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── drizzle.config.js            # Drizzle Kit configuration
├── package.json                 # Project dependencies & scripts
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- A running [MySQL](https://www.mysql.com/) server

> **Quick MySQL with Docker:**
> ```bash
> docker run --name mysql-dev -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=express_drizzle_db -p 3306:3306 -d mysql:8
> ```

---

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/express-drizzle-mysql.git
   cd express-drizzle-mysql
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your database credentials:
   ```env
   PORT=3000
   DATABASE_URL="mysql://root:password@localhost:3306/express_drizzle_db"
   ```

4. **Push Schema to Database:**
   ```bash
   npm run db:push
   ```

5. **Start Development Server:**
   ```bash
   npm run dev
   ```
   The server will start at: [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `nodemon src/index.js` | Starts the server with live reload |
| `npm start` | `node src/index.js` | Runs the server in production mode |
| `npm run db:push` | `drizzle-kit push` | Applies schema changes directly to MySQL |
| `npm run db:generate` | `drizzle-kit generate` | Generates SQL migrations from schema |
| `npm run db:studio` | `drizzle-kit studio` | Opens Drizzle Studio (web database viewer) |
| `npm run db:check` | `drizzle-kit check` | Validates schema consistency |

---

## 📡 API Endpoints

Base URL: `http://localhost:3000`

### Users API (`/api/users`)

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/users` | Get all users | None |
| `GET` | `/api/users/:id` | Get user by ID | None |
| `POST` | `/api/users` | Create a new user | `{ "name": "Alice", "email": "alice@example.com" }` |
| `PUT` | `/api/users/:id` | Update a user by ID | `{ "name": "Alice Smith", "email": "alice@example.com" }` |
| `DELETE` | `/api/users/:id` | Delete a user by ID | None |

#### Example Responses:

- **Create User (`POST /api/users`) $\rightarrow$ `201 Created`:**
  ```json
  {
    "message": "User created successfully"
  }
  ```

- **Get All Users (`GET /api/users`) $\rightarrow$ `200 OK`:**
  ```json
  [
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@example.com"
    }
  ]
  ```

- **User Not Found (`GET /api/users/999`) $\rightarrow$ `404 Not Found`:**
  ```json
  {
    "error": "User not found"
  }
  ```

---

## 🛠️ Adding a New Route

Adding a new resource (e.g. `products`) is as simple as:

1. **Create the route module** (`src/routes/products.js`):
   ```javascript
   const express = require("express");
   const router = express.Router();

   router.get("/", async (req, res) => {
     res.json({ message: "List of products" });
   });

   module.exports = router;
   ```

2. **Mount the route in** `src/index.js`:
   ```javascript
   const productsRouter = require("./routes/products");

   app.use("/api/products", productsRouter);
   ```

---

## 📄 License

[ISC](LICENSE)
