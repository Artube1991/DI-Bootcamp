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

const createTask = (req, res) => {
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

const updateTask = (req, res) => {
    try {
        const { id, todo } = req.body; 
        const index = todos.findIndex((todo) => todo.id === req.body.id);
        if (index === -1) {
          return res.status(404).send()
        };
        const newTodo = {
          id: todos[index].id,
          todo: req.body.todo,
        };
        todos.splice(index, 1, newTodo);
        res.json(puttingTodo);
        res.status(200).json("Task updated");
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

