const url = "http://localhost:3000/emojis";

const randomEmoji = document.getElementById("emoji");

const game = () => {
    fetch(url)
    .then((res) = res.json())
    .then((emojis) => {
        console.log(emojis.randomEmoji);
        randomEmoji.innerHTML = emojis.randomEmoji.emoji
    })
    .catch((error) => {
        console.log("The error is ", error);
    });
};

game();