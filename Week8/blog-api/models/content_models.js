const { db } = require("../config/db.js");

const getAllContent = () => {
    return db("great_content").select("id", "title", "content").orderBy("id");
};

console.log(getAllContent());

const getOneItem = (item_id) => {
    return db("great_content")
    .select("id", "title", "content")
    .where({ id: item_id });
  };

//   console.log(getOneItem(2));
  
  const insertItem = (title, content) => {
    return db("great_content").insert({title, content},["id","title","content"])
  }

// insertItem("New Title", "Somenthing test new");
  
  module.exports = {
    getAllContent,
    getOneItem,
    insertItem
  };
  