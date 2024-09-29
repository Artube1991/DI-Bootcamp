const express = require('express');
const router = express.Router();

const todos = [
    {id: 1,
        todo: "To make a haircut"},
    {id: 2,
        todo: "To clean the bedroom"}, 
    {id: 3,
        todo: "To finish discovering of Rondo Veneziano's discography"},
];

const getTodos = (req, res) => {
    try {
      res.status(200).json(todos);
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
      };

const createTodo = (req, res) => {
    try {
    const { todo } = req.body;
    const newTodo = {
            id: todos.length + 1,
            todo: todo
        };
        todos.push(newTodo);
        res.status(201).json(newTodo);
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
    };

const updateTodo = (req, res) => {
    try {
        const id = Number(req.params.id);
        const { todo } = req.body; 
        const index = todos.findIndex((task) => task.id === id);
        if (index === -1) {
          return res.status(404).send("Todo not found")
        };
        const newTodo = {
          id: todos[index].id,
          todo: todo,
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