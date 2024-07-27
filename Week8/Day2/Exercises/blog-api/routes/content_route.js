const {
    getContent,
    getOne,
    insertOne,
  } = require("../controllers/content_controllers.js");
  const express = require("express");

  const router = express.Router();

  router.get("/api/content", getContent);
  router.get("/api/content", getOne);

  router.post("/api/content", insertOne);

  module.exports = {
    router,
  }