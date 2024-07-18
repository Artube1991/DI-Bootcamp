const fs = require("fs");

function readFile(text) {
    fs.readFile(text, 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});
}


// module.exports = {
//     readFile
// };

function writeFile(text, newContent) {
    fs.writeFile(text, newContent, function (err) {
        if (err) {
            console.error(err)
            return
        }
    });
}

module.exports = {
    readFile, writeFile
};

// writeFile("ByeWorld.txt", "Text");
// readFile("ByeWorld.txt")