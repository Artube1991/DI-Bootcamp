const { db } = require("../config/db.js");

const getAllContent = () => {
  console.log("*********in function")
    return db().select().from("great_content").orderBy("id");
};

console.log("*****db",db)
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
  