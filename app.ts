import express, { Application } from "express";
import cors from "cors";
import compression from "compression";
import routes from "./routes";

export default function expressServerApp() {
  const app: Application = express();

  app.use(compression());
  app.use(cors({ credentials: true, origin: "*" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json({ limit: "1GB" }));
  app.use("/", routes());

  return app;
}

