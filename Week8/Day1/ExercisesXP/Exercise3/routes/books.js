const express = require('express');
const router = express.Router();

const books = [
    {
        id: 1,
        title: "The knights of the Inspiration",
        author: "Various Authors",
        year: 2009,
    },
    {
        id: 2,
        title: "Blue Paper",
        author: "Aleksei Ivanov",
        year: 2011,
    }, 
        
    {
        id: 3,
        title: "Keys and Castles",
        author: "Keys, the Literature Club",
        year: 2018,
    },
];

const getBooks = (req, res) => {
    try {
      res.status(200).json(books);
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
      };

const createBook = (req, res) => {
    try {
    const { title, author, year } = req.body;
    const newBook = {
            id: books.length + 1,
            title: title,
            author: author,
            year: year,
        };

        books.push(newBook);
        res.status(201).json("You successfully added new book: -> ", newBook);
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
    };

const updateBook = (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, author, year } = req.body; 
        const index = books.findIndex((book) => book.id === id);
        if (index === -1) {
          return res.status(404).send("Book not found")
        };
        const newBook = {
          id: books[index].id,
          title: title,
          author: author,
          year: year,
        };

        console.log(newBook);
        console.log(id);
        books.splice(index, 1, newBook);
        res.status(200).json(`You updated book with id ${id}`);
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
    };
    
const deleteBook = (req, res) => {
    try {
    const id = Number(req.params.id);
    const index = books.findIndex((book) => book.id === 4);
        if (index === -1) {
          return res.status(404).send("Book not found");
        };
        books.splice(index, 1);
        res.status(200).json(`You've just deleted book with id ${id}`);
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
    };

router.get('/books', getBooks);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = {
    router,
};