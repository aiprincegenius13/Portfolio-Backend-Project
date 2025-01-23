const express = require("express");
const app = express();
const port = 3000; 

// app.get("/" (req, res) => {
//     res.send("My portfolio root path")
// });


app.listen(port, () => {
    console.log("Server for Portfolio Backend is running")
});

