const fs = require("fs");

function copying(text1, text2) {
    fs.copyFile(text1, text2, (err) => {
    if (err) return console.error(err);
    console.log("File copied");
  });
}

copying("source.txt", "destination.txt");