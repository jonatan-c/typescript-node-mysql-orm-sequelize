"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(process.env.MYSQL_DB_NAME || "base_de_datos_prueba", process.env.MYSQL_USER || "root", process.env.MYSQL_PASS, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    // logging: false
});
exports.default = db;
//# sourceMappingURL=db.config.js.map