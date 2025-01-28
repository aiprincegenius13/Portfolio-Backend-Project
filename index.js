const express = require("express");
const path = require("path");
const projectRoutes = require("./projects.js");

const app = express();
const port = 8085;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger middleware
app.use((req, res, next) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.url}`);
    next();
});

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Root route
// app.get("/", (req, res) => {
//     res.send("Welcome to the Portfolio Backend!");
// });


//Serving index.html file  for first path
app.get("/", (req, res) => {
    console.log("This is my html")
    res.sendFile(path.join(__dirname, "index.html"));
})

// Projects route
app.use("/api/projects", projectRoutes);

app.post("/api/contact",(req,res)=>{
    console.log("Contact submission goes here")
})

// Start server
app.listen(port, () => {
    console.log(`Server for Portfolio Backend is running on http://localhost:${port}`);
});

// // Import modules
// const projects = require('./projects');
// const routes = require('./routes');
// const errors = require('./error');
// // const logger = require('./logger');
// const { rmSync } = require("fs");

// // Combine and organize exports
// module.exports = {
//   projects, // All project-related functions
//   routes,   // Route management
//   errors,   // Error handlers
//  logger,   // Logging functions
// };
