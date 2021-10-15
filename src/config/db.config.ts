import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.MYSQL_DB_NAME || "base_de_datos_prueba",
  process.env.MYSQL_USER || "root",
  process.env.MYSQL_PASS,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    // logging: false
  }
);

export default db;
