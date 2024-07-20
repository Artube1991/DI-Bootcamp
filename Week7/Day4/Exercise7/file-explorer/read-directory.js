const fs = require("fs");

function listing(dir) {fs.readdir(dir, (err, files) => {
    console.log(files);
  });
};

