const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataFilePath = path.join(__dirname, "../data/projects.json");

// Get all projects
router.get("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    res.json(data);
});

// Add a new project
router.post("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    const newProject = req.body;

    if (!newProject.name || !newProject.description) {
        return res.status(400).json({ error: "Name and description are required" });
    }

    newProject.id = data.length + 1;
    data.push(newProject);

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    res.status(201).json(newProject);
});

// Delete a project
router.delete("/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    const id = parseInt(req.params.id, 10);
    const updatedData = data.filter(project => project.id !== id);

    if (updatedData.length === data.length) {
        return res.status(404).json({ error: "Project not found" });
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(updatedData, null, 2));
    res.status(204).send();
});

function createProject(name) {
    return { id: Date.now(), name };
  }
  
  function listProjects() {
    return [{ id: 1, name: 'Sample Project' }];
  }
  
  module.exports = {
    createProject,
    listProjects,
  };
  
module.exports = router;
