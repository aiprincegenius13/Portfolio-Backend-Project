const express = require("express");
const app = express();
const port = 8081; 


app.use("/", (req, res) => {
    res.send("My portfolio root path");
});

app.listen(port, () => {
    console.log("Server for Portfolio Backend is running")
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

app.set("view engine", "ejs");
app.set("views", "./views");

