const express = require("express");
const app = express();
const cors = require("cors");
// const { router } = require("./routes/content_route.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.listen(process.env.PORT || 5000, () => {
  console.log(`we are listening on ${process.env.PORT || 5000}`);
});

// app.use("/", router);