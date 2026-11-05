const express = require("express");

const  db  = require("../db/db");
const router = express.Router();
const { productsenyem } = require("../db/schema");

router.get("/", async (req, res) => {
  try {
        const entries = await db.select().from(productsenyem);

        res.status(200).json(entries);
  }
  catch (error) 
  {
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
})

module.exports = router;