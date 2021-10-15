import db from "../config/db.config";
import { DataTypes } from "sequelize";

const Usuario = db.define("Usuarios", {
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
});
Usuario.sync();

export default Usuario;
