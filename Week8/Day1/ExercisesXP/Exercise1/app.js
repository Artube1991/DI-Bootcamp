const express = require('express');
const app = express();
app.use(express.json());
const { router } = require('./routes/index.js');

app.li