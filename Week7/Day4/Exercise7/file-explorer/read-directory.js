const fs = require("fs");

function listing(dir) {fs.readdir(dir, (err, files) => {
    if (err) return console.error(err);
    console.log(files);
  });
};

listing(".");