const {
    getAllContent,
    getOneItem,
    insertItem,
  } = require("../models/content_models.js");

const getContent = (req, res) => {
    getAllContent()
    .then((result) => {
        res.json(result);
    })
    .catch((e) => {
        res.status(404).json({message: 'something went wrong!!!'});
    });
};

const getOne = (req, res) => {
    const { id } = req.params;
    getOneItem(id)
      .then((result) => {
        res.json(result);
      })
      .catch((e) => {
        res.status(404).json({ message: "something went wrong!!!" });
      });
  };
  
  const insertOne = (req, res) => {
    const { title, content } = req.body;
    insertItem(title, content)
      .then((result) => {
        // res.json(result);
        getAllContent(req,res)
      })
      .catch((e) => {
        res.status(404).json({ message: "something went wrong!!!" });
      });
  };

  module.exports = {
    getContent,
    getOne,
    insertOne
  }