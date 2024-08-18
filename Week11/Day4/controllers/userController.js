const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  registerUser: async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;

    const user = { username, password, email, first_name, last_name };

    try {
      const userInfo = await userModel.createUser(user);
      res.status(201).json({
        message: "User registered successfullt",
        user: userInfo,
      });
    } catch (error) {
      console.log(error.code);
      if (error.code == 23505) {
        return res
          .status(200)
          .json({ messgae: "Email or Username already exist" });
      }
      res.status(500).json({ error: "internal server error" });
    }
  },
  loginUser: async (req, res) => {
    const { email, username, password } = req.body;

    try {
      const user = await userModel.getUserByUsername(email, username);

      if (!user) {
        return res.status(404).json({ messgae: "user not found, ...." });
      }

      const passwordMatch = await bcrypt.compare(password + "", user.password);

      if (!passwordMatch) {
        return res.status(401).json({ messgae: "Authentication failed..." });
      }

      const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

      const accesstoken = jwt.sign(
        { userid: user.id, email: user.email },
        ACCESS_TOKEN_SECRET,
        { expiresIn: "60s" }
      )
      
      const refreshtoken = jwt.sign(
        { userid: user.id, email: user.email },
        REFRESH_TOKEN_SECRET,
        { expiresIn: "60s" }
      );


      res.cookie("Alex-token", accesstoken,{
        httpOnly: true,
        // secure: 
        maxAge: 60 * 1000,
      });

      res.cookie("refresh-token", refreshtoken,{
        httpOnly: true,
        // secure: 
        maxAge: 60 * 60 * 1000 * 24 * 3,
      });



      res.json({
        message: "Login succesfull",
        user: { userid: user.id, email: user.email },
        token: accesstoken,
        refresh: refreshtoken
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await userModel.getUserById(req.userid);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  },
};
