const {
    getAllBooks,
    getOneBook,
    insertBook,
  } = require("../__models/books_models.js");

const getAll = (req, res) => {
    getAllBooks()
    .then((result) => {
        res.json(result);
    })
    .catch((e) => {
        res.status(404).json({message: 'We found an error!!!'});
    });
};

const getOne = (req, res) => {
    const { bookID } = req.params;
    getOneBook(bookID)
      .then((result) => {
        res.json(result);
      })
      .catch((e) => {
        res.status(404).json({ message: 'We found an error!!!'});
      });
  };
  
  const insertOne = (req, res) => {
    const { title, author, publishedyear } = req.body;
    insertBook(title, author, publishedyear)
      .then((result) => {
        res.json(result);
        // getAllBooks(req,res)
      })
      .catch((e) => {
        res.status(404).json({ message: "We found an error!!!" });
      });
  };

  module.exports = {
    getAll,
    getOne,
    insertOne
  }