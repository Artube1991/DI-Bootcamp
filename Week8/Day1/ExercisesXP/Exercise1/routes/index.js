const express = require('express');
const router = express.Router();
const { hello, about } = require('../controllers/controllers.js');

router.get('/', hello);
router.get('/about', about);

module.exports = {
    router,
}