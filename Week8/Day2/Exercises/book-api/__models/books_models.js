const { db } = require("../__config/db.js");

const getAllBooks = () => {
  return db("books").select("id", "title", "author", "publishedyear").orderBy("id");
};

getAllBooks()
.then(data => {
  console.log(data);
})
.catch(e=>{
  console.log(e.message);
})

const getOneBook = (item_id) => {
    return db("books")
    .select("id", "title", "author", "publishedyear")
    .where({ id: item_id });
  };

// getOneBook(2)
// .then(data => {
//   console.log(data);
// })
// .catch(e=>{
//   console.log(e.message);
// })
  
  const insertBook = (title, author, publishedyear) => {
    return db("books").insert({title, author, publishedyear},["id","title","author", "publishedYear"])
  }

// insertItem("New Title", "Somenthing test new")
// .then(data => {
//   console.log(data);
// })
// .catch(e=>{
//   console.log(e.message);
// })

  
  module.exports = {
    getAllBooks,
    getOneBook,
    insertBook
  };
  