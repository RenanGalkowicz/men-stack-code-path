import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

import db from "./config/database.js";
db.connect();

import routes from "./routes/moviesRoutes.js";

app.use("/movies", routes);

export default app;