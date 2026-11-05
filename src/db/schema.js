const { mysqlTable, int, varchar, boolean } = require("drizzle-orm/mysql-core");

const productsenyem = mysqlTable("productsenyem", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }),
  price: int("price").notNull(),
  instock: boolean("instock").default(false),
});

module.exports = { productsenyem };
