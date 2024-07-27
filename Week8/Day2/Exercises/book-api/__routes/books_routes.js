const {
    getAll,
    getOne,
    insertOne,
  } = require("../__controllers/books_controllers.js");
  const express = require("express");

  const router = express.Router();

  router.get("/api/books", getAll);
  router.get("/api/books/:bookID", getOne);

  router.post("/api/books", insertOne);

  module.exports = {
    router,
  }