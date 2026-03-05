import express from "express";
import dotenv from "dotenv";
import stringsController from "./controllers/strings.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8013;

app.use('/', stringsController);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App is started at http://localhost:${PORT}`);
});