const url = "http://localhost:3000/emojis";

const gameProcess = {
    num: 1,
};

const randomEmoji = document.getElementById("emoji");
const form = document.getElementById("form");
const button = document.getElementById("button");
const next = document.getElementById("next");
const message = document.getElementById("message");

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

};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let answer = e.target.answer.value;
    console.log(answer);
    fetch(`http://localhost:3000/emojis/${answer}`, { 
        method: "POST", 
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        // params: answer,
    })
    .then(response => response.json())
    .then(data => message.innerText = data);
    console.log(gameProcess);
});

next.addEventListener("click", (e) => {
    e.preventDefault();
    gameProcess.num++;
    game();
    message.innerText = `The question number ${gameProcess.num}`;
})


game();
