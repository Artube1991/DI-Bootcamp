const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

usernames = []

gameInfo.forEach((elem) => usernames.push(elem.username + "!"))
console.log(usernames)

const winners = []
const not_winners = []

gameInfo.forEach((elem) => elem.score > 5
? winners.push(elem.username)
: not_winners.push(elem.username))
console.log(winners)

let scores = []

get_scores = gameInfo.forEach((elem) => scores.push(elem.score));
console.log(scores)

total_scores = scores.reduce(function (prev, curr) {
    return prev + curr;
})
console.log(total_scores)
