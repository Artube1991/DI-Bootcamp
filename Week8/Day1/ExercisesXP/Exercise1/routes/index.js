const express = require('express');
const app = express();
const router = express.Router();

router.get('/', 'this is my homepage');
router.get('/about');