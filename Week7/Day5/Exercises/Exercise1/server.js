const express = require('express');
const app = express();
const items = require("./data.js");

app.listen(5000, () => {
    console.log("my server is listening on 5000");
  });
  
  app.get("/content", (req, res) => {
    res.json(items);
  });

  app.get("/content/:itemID", (req, res) => {
    const id = Number(req.params.itemID);
    const item = items.find((item) => item.id === id);
    res.json(item);

    if (!item) {
      return res.status(404).send("Item not found");
    }
    res.json(item);
  });