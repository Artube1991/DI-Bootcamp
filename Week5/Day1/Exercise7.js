const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
word = new Array()

for (let letters of names) {
    word.push(letters[0])
}

word.sort()
console.log(word.join(''))
