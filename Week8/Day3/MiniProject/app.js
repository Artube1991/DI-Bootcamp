const express = require('express');
const app = express();
const { router } = require("./routes.js");

app.listen(5000, () => {
    console.log("still listening on 5000");
  });

app.use("/", router);


//   const express = require("express");
// const cors = require("cors");


// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(cors());

// app.listen(process.env.PORT || 5000, () => {
//   console.log(`run on ${process.env.PORT || 5000}`);
// });

