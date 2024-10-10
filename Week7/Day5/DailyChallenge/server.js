const express = require("express");

const { emojis } = require("./config/config");

const app = express();

app.listen(3000, () => {
    console.log("The server is running on 3000");
});

app.use("/", express.static(__dirname + "/public"));

app.get("/emojis", (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    res.json({ randomEmoji });
})