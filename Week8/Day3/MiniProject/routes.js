const express = require('express');
const router = express.Router();

const { 
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask 
} = require('controllers.js')

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTask)
router.post('/task', createTask) 
router.put('/:taskID', updateTask) 
router.delete('/:taskID', deleteTask)

module.exports = router