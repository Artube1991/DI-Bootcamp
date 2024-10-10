const express = require("express");
const cors = require("cors");
// const path = require("path");

const { emojis } = require("./config/config");

const gameStat = {
    answer: "",
    total: 0,
    score: 0,
}

const app = express();

app.use(cors());

app.listen(3000, () => {
    console.log("The server is running on 3000");
});

app.use("/", express.static(__dirname + "/public"));

app.get("/emojis", (req, res) => {
    // res.send(path.join(__dirname, "public", "index.html"));
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    gameStat.answer = randomEmoji.name;
    res.json({ randomEmoji });
  });

app.post("/emojis/:answer", (req, res) => {
    try {
        let userAnswer = req.params.answer;
        if (userAnswer === gameStat.answer) {
            gameStat.score++;
            gameStat.total++;
            // console.log(gameStat.score);
            // console.log(gameStat.total);
            res.status(201).json(`Your answer is correct! Your score now is ${gameStat.score} of ${gameStat.total}`)
        }
        else {
            gameStat.total++;
            res.status(404).json(`You gave wrong answer! Your score now is ${gameStat.score} of ${gameStat.total}`)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
});