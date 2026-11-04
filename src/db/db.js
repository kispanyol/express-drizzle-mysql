const { drizzle } = require("drizzle-orm/mysql2");
const mysql = require("mysql2/promise");

const poolConnection = mysql.createPool({
  uri: process.env.DATABASE_URL,
});

const db = drizzle(poolConnection);

module.exports = db;
