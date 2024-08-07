const express = require('express');
const app = express();
const fetching = require('./data/dataService.js');
const url = "https://jsonplaceholder.typicode.com/posts";

const dataToServer = fetching.fetchPosts(url);
// console.log(dataToServer);

app.listen(5000, () => {
    console.log("the server is running on 5000");
  });

app.get("/posts", (req, res) => {
    res.json(dataToServer);
  });

