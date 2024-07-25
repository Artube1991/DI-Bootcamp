const { db } = require("../config/db.js");

const getAllContent = () => {
  return db("great_content").select("id", "title", "content").orderBy("id");
};

// getAllContent()
// .then(data => {
//   console.log(data);
// })
// .catch(e=>{
//   console.log(e.message);
// })

const getOneItem = (item_id) => {
    return db("great_content")
    .select("id", "title", "content")
    .where({ id: item_id });
  };

// getOneItem(2)
// .then(data => {
//   console.log(data);
// })
// .catch(e=>{
//   console.log(e.message);
// })
  
  const insertItem = (title, content) => {
    return db("great_content").insert({title, content},["id","title","content"])
  }

// insertItem("New Title", "Somenthing test new")
// .then(data => {
//   console.log(data);
// })
// .catch(e=>{
//   console.log(e.message);
// })

  
  module.exports = {
    getAllContent,
    getOneItem,
    insertItem
  };
  