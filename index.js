const express = require("express");
const routes = require("./route"); // Assuming your route file is named 'route.js'
const errorHandler = require("./error"); // Import the error handling middleware
const app = express();
const port = 8081;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// View engine setup
app.set("view engine", "ejs");
app.set("views", "./views");

// Routes
app.use("/", routes);

// Error handling middleware
app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
});

// Start server
app.listen(port, () => {
    console.log("Server for Portfolio Backend is running on port", port);
});
