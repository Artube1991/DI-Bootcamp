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

const createTodo = (req, res) => {
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
        console.log(newTodo);
        console.log(id);
        todos.splice(index, 1, newTodo);
        res.status(200).json("Todo updated");
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
    };
    
const deleteTodo = (req, res) => {
    try {
    const id = Number(req.params.id);
    const index = todos.findIndex((task) => task.id === 4);
        if (index === -1) {
          return res.status(404).send("Todo not found");
        };
        todos.splice(index, 1);
        res.status(200).json("Todo deleted");
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
    };

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = {
    router,
};