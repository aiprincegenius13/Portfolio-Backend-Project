// var require = nodeRequire
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
res.render("index", {
    name: "Jamar Johnson",
    bio: "Short Bio"
    });
});

router.get("/api/about", (req, res) => {
    res.json({
        name:" Jamar JOhnson",
        bio:"This is about me",
        Skills: ["skill1", "skill2", "skill3"]
    })
});

router.get("/api/projects", (req, res) => {
    res.json([
       {id: 1, title: "Portfolio Website", description: "My personal website"},
       {id: 2, title: "project1", description: "A description of project"},
    ])
})

router.post("/api/contacts", (req, res) => {
    const {name, message} = req.body;
    console.log(`Message from ${name}: ${message}`);
    res.send("Thank you for your message");
})
module.exports = router