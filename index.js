import express from "express";
import dotenv from "dotenv";
import stringsController from "./controllers/strings.js";
import toodeController from "./controllers/products.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8013;

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:27017/mongoose_orm`, {
})
.then(() => {
    console.log("MongoDB connected");
})
.catch(err => {
    console.error("MongoDB connection error:", err);
});

app.use('/', stringsController);
app.use('/', toodeController);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App is started at http://localhost:${PORT}`);
});