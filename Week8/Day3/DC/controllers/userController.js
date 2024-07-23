const userModel = require('../models/userModels.js');
const bcrypt = require("bcrypt");

module.exports = {
    registerUser: async (req, res) => {
        const { username, password, email, first_name, last_name} = req.body;

        const user = {username, password, email, first_name, last_name}

        try {
            const userInfo = await userModel.createUser(user);
            res.status(201).json({
                message: 'User registered successfully',
                user: userInfo,
            });
        } catch (error) {
            console.log(error);
            if(error.code == 23505) {
                console.log("User already exists");
            }
            res.status(500).json({error: "internal server error"})
        }
    },

    loginUser: async (req, res) => {
        const {email, username, password} = req.body;

        try {
            const user = await userModel.getUserByUsername(email, username)

            if (!user) {
                return res.status(404).json({message: "user not found"})
            }
            const passwordMatch = await bcrypt.compare(password + "", user.password);

            if (!passwordMatch) {
                return res.status(404).json({message: "Authentication failed..."});
            }

            res.json({
                message: "Login successful",
                user: {userid: user.id, username: user.username},
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        }
    },

    getAllUsers: async (req, res) => {
        try {

        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"})
        }
    }
};