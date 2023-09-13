import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./server/routes/posts.js";
import userRoutes from "./server/routes/users.js";
import { connectDb } from "./server/config/db.js";

dotenv.config();

connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("APP IS RUNNING");
});

app.listen(port, () => console.log(`Server started on port: ${port}`));
