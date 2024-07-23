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
router.put('/:productID', updateProduct) 
router.delete('/:productID', deleteProduct)

module.exports = router