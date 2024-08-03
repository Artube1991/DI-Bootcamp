const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("listening on 5000");
  });

app.get("/api/hello", (req, res) => {
    res.json("Hello from Express");
  });

// app.use(express.json());

// app.post('/api/books', (req, res) => {
//     const { title, author, publishedYear } = req.body;
//     const newBook = {
//         id: books.length + 1,
//         title: title,
//         author: author,
//         publishedYear: publishedYear,
//     };
//     books.push(newBook);
//     res.status(201).json(newBook);
// });