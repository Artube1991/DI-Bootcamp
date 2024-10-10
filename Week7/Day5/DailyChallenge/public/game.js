const url = "http://localhost:3000/emojis";

const randomEmoji = document.getElementById("emoji");
const form = document.getElementById("form");
const button = document.getElementById("button");
const message = document.getElementById("message");

const gameScore = {
    total: 0,
    score: 0,
  }

const game = (req, res) => {
    fetch(url)
    .then((res) => res.json())
    .then((emojis) => {
        console.log(emojis.randomEmoji);
        randomEmoji.innerHTML = emojis.randomEmoji.emoji
    })
    .catch((error) => {
        console.log("The error is ", error);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let answer = e.target.answer.value;
        console.log(answer);
        fetch(`http://localhost:3000/emojis/${answer}`, { 
            method: "POST", 
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            params: answer,
        })
        .then(response => response.json())
        .then(data => message.innerText = data);
    });
};


// const answer = (req, res) => {
//     try {
//         let answer = req.params.answer;
//         if (answer === triviaQuestions[numberQuestion.number].answer) {
//             gameScore.score++;
//             res.status(201).json("Your answer is correct!")
//         }
//         else {
//             res.status(404).json("You gave wrong answer!")
//         }
//         numberQuestion.number++;
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error: "Internal server error"})
//     }
// }


game();
