const tasks = require('./data.js');
const express = require('express');
const app = express();


const getTasks = (req, res) => {
  try {
    res.json(tasks);
    } catch (error) {
      console.log(error);
      res.status(500).json({error: "Internal server error"})
    }
    };

const getTask = (req, res) => {
  try {
  const id = Number(req.params.taskID);
  const task = tasks.find((task) => task.id === id);
  
  if (!task) {
      return res.status(404).send("Task not found");
  }

  // res.sendStatus(200);
  res.json(task);
} catch (error) {
  console.log(error);
  res.status(500).json({error: "Internal server error"})
}
};

const createTask = (req, res) => {
  try {
  const { task, decription, status } = req.body;
  const newTask = {
      id: tasks.length + 1,
      task: task,
      decription: decription,
      status: status,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
} catch (error) {
  console.log(error);
  res.status(500).json({error: "Internal server error"})
}
};

const updateTask = (req, res) => {
  try {
  // const { task, decription, status } = req.body; 
  const id = Number(req.params.taskID);
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    return res.status(404).send()
  };
  const puttingTask = {
    id: tasks[index].id,
    task: req.body.task,
    description: req.body.decription,
    status: req.body.status,
  };
  tasks.splice(index, 1, puttingTask);
  res.json(puttingTask);
  res.status(200).json("Task updated");
} catch (error) {
  console.log(error);
  res.status(500).json({error: "Internal server error"})
}
};

const deleteTask = (req, res) => {
  try {
  const id = Number(req.params.taskID);
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    return res.status(404).send("Task not found");
  }
  tasks.splice(index, 1);
  res.status(200).json("Task deleted");
} catch (error) {
  console.log(error);
  res.status(500).json({error: "Internal server error"})
}
}

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
