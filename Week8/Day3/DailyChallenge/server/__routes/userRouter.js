const express = require('express');
const router = express.Router();

const registerUser = async (req, res) => {
        const { username, password, email, first_name, last_name} = req.body;

        const user = {username, password, email, first_name, last_name};

        try {
            const userInfo = {
                id: users.length + 1,
                username: username,
                password: password,
                email: email,
                first_name: first_name,
                last_name: last_name
            };
            res.status(201).json({
                message: `Hello, ${username}! Your account is now created!`,
                user: userInfo,
            });
        } catch (error) {
            console.log(error);
            if (error.code == 23505) {
                return res
                .status(200)
                .json({message: "Email or Username already exists"});
            }
            res.status(500).json({error: "internal server error"})
        }
    };

const loginUser = async (req, res) => {
        const {username, password} = req.body;
        

        try {
            const name = users.find(user => user.username === username);
            const psw = users.find(user => user.password === password);

            if (name && psw) {
                res.json({
                    message: `Hi, ${username}! Welcome back again!`,
                    user: {userid: user.id, username: user.username},
                });
            };

            if (!name) {
                return res.status(404).json({message: "Username is not registered."})
            };

            if (!psw) {
                return res.status(404).json({message: "Authentication failed..."});
            };

        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        }
    };

const getAllUsers = (req, res) => {
    try {
      res.status(200).json(users);
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
      };

const getUserByID = (req, res) => {
    const id = req.params.id;
        try {
            const user = users.find(user => user.id === id);
            if (!user) {
                res.status(404).json("User not found");
            }
            else {res.status(200).json(user)};
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"})
        }
    };

const updateUser = (req, res) => {
    try {
        const id = Number(req.params.id);
        const { username, password, email, first_name, last_name} = req.body;
        const index = users.findIndex((user) => user.id === id);
        if (index === -1) {
          return res.status(404).send("User not found")
        };
        const updUser = {
          id: users[index].id,
          username: username,
          password: password,
          email: email,
          first_name: first_name,
          last_name: last_name,
        };
        console.log(updUser);
        console.log(id);
        users.splice(index, 1, updUser);
        res.status(200).json(`You've updated user with id ${id}`);
      } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
      }
    };


router.post('/register', registerUser);
router.post('/login', loginUser);

router.get("/users", getAllUsers);
router.get("/users/:id", getUserByID);

router.put("/users/:id", updateUser);

module.exports = router;
