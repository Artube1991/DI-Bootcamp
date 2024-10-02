const express = require('express');
const router = express.Router();
const userController = require('../__controllers/userController.js');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserByID);

router.put("/users/:id", userController.updateUser);

module.exports = router;
