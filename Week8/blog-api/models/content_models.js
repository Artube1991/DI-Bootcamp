const { db } = require("../config/db.js");

const getAllContent = () => {
    return db('great_content').select("id", "title", "content").orderBy("id");
};

const getOneItem = (item_id) => {
    return db("great_content")
    .select("id", "title", "content")
    .where({ id: item_id });
  };
  
  const insertItem = (title, content) => {
    return db("great_content").insert({title, content},["id","title","content"])
  }
  
  module.exports = {
    getAllContent,
    getOneItem,
    insertItem
  };
  