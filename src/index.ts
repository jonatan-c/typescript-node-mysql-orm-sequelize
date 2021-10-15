import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./routes/usuario.routes";
import db from "./config/db.config";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database online");
    } catch (error) {
      console.log(error);
    }
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Lectura del body
    this.app.use(express.json());
    //Carpeta publica
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server in http://localhost:${this.port}`);
    });
  }
}

const server = new Server();

server.listen();
