const tasks = require('./data.js');

const getTasks = (req, res) => {
    res.json(tasks);
    };

const getTask = (req, res) => {
  const id = Number(req.params.taskID);
  const task = tasks.find((task) => task.id === id);
  
  if (!task) {
      return res.status(404).send("Task not found");
  }

  // res.sendStatus(200);
  res.json(task);
};

const createTask = (req, res) => {
  const { task, decription, status } = req.body;
  const newTask = {
      id: tasks.length + 1,
      task: task,
      decription: decription,
      status: status,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const id = Number(req.params.taskID);
  const index = tasks.find((task) => task.id === id);
  if (index === -1) {
    return res.status(404).send()
  };
  const puttingTask = {
    id: tasks[index].id,
    task: req.body.task,
    description: req.body.decription,
    status: req.body.status,
  };
  content[index] = puttingItems;
  res.status(200).json("Task updated");
};

const deleteTask = (req, res) => {
  const id = Number(req.params.taskID);
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    return res.status(404).send("Task not found");
  }
  tasks.splice(index, 1);
  res.status(200).json("Task deleted");
}

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
