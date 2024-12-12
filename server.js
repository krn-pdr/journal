const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const connectDB = require("./backend/config/db");
const routes = require("./backend/routes/routes");

// Load config
dotenv.config();

// Connect to database
connectDB();

// Middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use("/api", routes);

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});
