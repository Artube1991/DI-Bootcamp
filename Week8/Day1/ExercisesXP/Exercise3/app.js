const express = require('express');
const app = express();
app.use(express.json());
const { router } = require('./routes/books.js');



app.listen(3000, () => {
    console.log("This is how I listen to the server of Week 8 Day 1 Exercise 1");
});

app.use('/', router);