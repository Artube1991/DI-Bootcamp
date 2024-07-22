const express = require('express');
const app = express();
const books = require("./data.js");

app.listen(5000, () => {
    console.log("still listening on 5000");
  });

app.get("/api/books", (req, res) => {
    res.json(books);
  });

app.get("/api/books/:bookID", (req, res) => {
    const id = Number(req.params.bookID);
    const book = books.find((book) => book.id === id);
    

    if (!book) {
        return res.status(404).send("Book not found");
    }

    res.sendStatus(200);
    res.json(book);
})