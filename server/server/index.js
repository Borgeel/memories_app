import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import { connectDb } from "./config/db.js";

conn();
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/posts", postRoutes);

app.listen(port, () => console.log(`Server started on port: ${port}`));
