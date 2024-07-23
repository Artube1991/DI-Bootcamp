const express = require('express');
const router = express.Router();

const { 
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask 
} = require('../controllers/products.js')

router.get('/', getProducts)
router.get('/:productID', getProduct)
router.post('/', createProduct) 
router.put('/:productID', updateProduct) 
router.delete('/:productID', deleteProduct)

module.exports = router