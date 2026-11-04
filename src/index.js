require("dotenv").config();

const express = require("express");
const db = require("../db/db");

const { users } = require("../db/schema");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const API_REFIX = "/api";

// GET: Fetch all users
app.get(API_REFIX + "/users", async (req, res) => {
  const allUsers = await db.select().from(users);
  return res.status(200).json(allUsers);
});

// POST: Create a new user
app.post(API_REFIX + "/users", async (req, res) => {
  try {
    await db.insert(users).values({
      name: req.body.name,
      email: req.body.email,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
