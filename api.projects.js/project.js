// Example function to return project data
const getProjects = (req, res) => {
    const projects = [
        { id: 1, title: "Portfolio Website", description: "My personal website" },
        { id: 2, title: "Project name", description: "A game app" },
    ];
    res.json(projects);
};

module.exports = { getProjects };
