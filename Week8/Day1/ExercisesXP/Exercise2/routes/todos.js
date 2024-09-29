const todos = [
    {id: 1,
        task: "To make a haircut"},
    {id: 2,
        task: "To clean the bedroom"}, 
    {id: 3,
        task: "To finish discovering of Rondo Veneziano's discography"},
];

const getTodos = (req, res) => {
    try {
      res.status(200).json(todos);
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
      };

const express = require('express');
const router = express.Router();

router.get('/todos', getTodos);

module.exports = {
    router,
};

