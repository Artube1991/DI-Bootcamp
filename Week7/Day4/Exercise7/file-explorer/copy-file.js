const fs = require("fs");

let textIn;

function readFile(text) {
    fs.readFile(text, 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    textIn = data;
    return textIn;
});
}

readFile("source.txt");

console.log(textIn);