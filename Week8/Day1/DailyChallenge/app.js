const express = require('express');
const app = express();
app.use(express.json());
const { router } = require("./routes.js");

app.listen(5000, () => {
    console.log("Listening on Trivia Game, 5000");
});

app.use("/", router);