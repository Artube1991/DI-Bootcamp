const express = require("express");
const cors = require("cors");
const { router } = require("./__routes/books_routes.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.listen(process.env.PORT || 5000, () => {
  console.log(`we are listening on ${process.env.PORT || 5000}`);
});

app.use("/", router);