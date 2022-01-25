const express = require("express");
const mongose = require("mongoose");
const app = express();

// Import Routes
const todoRoutes = require("./routes/todos");

const port = process.env.port || 5000;

// Connect to DB
mongose.connect("mongodb://localhost:27017/todo-app", () => {
  console.log("Connected to DB");
});

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Todos Middleware
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});
