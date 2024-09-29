const express = require('express');
const app = express();
app.use(express.json());
const { router } = require('./routes/index.js');

app.listen(3000, () => {
    console.log("I'm listening on Week 8 Day 1 Exercise 1 Server");
});

app.use('/', router);