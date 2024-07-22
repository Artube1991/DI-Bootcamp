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

    // res.sendStatus(200);
    res.json(book);
})

app.use(express.json());

app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
        publishedYear: publishedYear,
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

