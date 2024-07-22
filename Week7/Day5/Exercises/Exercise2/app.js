const express = require('express');
const app = express();
const books = require("./data.js");

app.listen(5000, () => {
    console.log("still listening on 5000");
  });

app.get("/api/books", (req, res) => {
    res.json(books);
  });