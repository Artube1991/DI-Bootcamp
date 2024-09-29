const express = require('express');
const app = express();
app.use(express.json());
const { router } = require("./routes/todos.js");

app.listen(3000, () => {
    console.log("I'm listening on Week 8 Day 1 Exercise 1 server");
});

app.use("/", router);