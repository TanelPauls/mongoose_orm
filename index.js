import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8013;

app.get("/", (req, res) => {
  res.send("Express Server running");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App is started at http://localhost:${PORT}`);
});