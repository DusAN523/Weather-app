import express from "express";
import cors from "cors";
import routes from "./routes";
const app = express();
import morgan from "morgan";
import http from "http";
const httpServer = http.createServer(app);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(routes);

export default httpServer;
