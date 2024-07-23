const express = require('express');
const router = express.Router();

const { 
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask 
} = require('./controller.js')

router.get('/tasks', getTasks)
router.get('/tasks/:taskID', getTask)
router.post('/task', createTask) 
router.put('/:taskID', updateTask) 
router.delete('/:taskID', deleteTask)

module.exports = {
    router,
}