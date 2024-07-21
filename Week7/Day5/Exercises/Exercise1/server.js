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

app.use(express.json());

app.post("/content", (req, res) => {
  const newItem = {
    id: items.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put("/content", (req, res) => {
  const id = Number(req.params.itemID);
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).send("Item not found");
  }
  const puttingItems = {
    id: items[index].id,
    title: req.body.title,
    content: req.body.content,
  };
  content[index] = puttingItems;
  res.status(200).json("Item updated");
});