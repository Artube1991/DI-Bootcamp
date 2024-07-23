const { db } = require("../config/db.js");

const getAllContent = () => {
  return db("great_content").select("id", "title", "content").orderBy("id");
};

//   {
//   console.log("*********in function")
//     db().select().from("great_content").orderBy("id")
//     .then(rows=>{
//       console.log(rows);
//     })
//     .catch(error => {
//       console.error('Error executing query', error);
//     })
//     ;
// };

console.log(getAllContent());

const getOneItem = (item_id) => {
    return db("great_content")
    .select("id", "title", "content")
    .where({ id: item_id });
  };

  console.log(getOneItem(2));
  
  const insertItem = (title, content) => {
    return db("great_content").insert({title, content},["id","title","content"])
  }

// insertItem("New Title", "Somenthing test new");
  
  module.exports = {
    getAllContent,
    getOneItem,
    insertItem
  };
  