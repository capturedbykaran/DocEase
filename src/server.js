import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import "./config/db.js";  // DB connection

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to DocEase API by capturedbykaran!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});