const userModel = require('../__models/userModels.js');
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
            if (error.code == 23505) {
                return res
                .status(200)
                .json({message: "Email or Username already exists"});
            }
            res.status(500).json({error: "internal server error"})
        }
    },
    loginUser: async (req, res) => {
        const {email, username, password} = req.body;

        try {
            const user = await userModel.getUserByUsername(email, username, password)

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
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        }
    },

    getAllUsers: async (req, res) => {
        try {
        const users = await userModel.getAllUsers();
        res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"})
        }
    },

    getUserByID: async (req, res) => {
        try {
            const user = await userModel.getUserByID(req.params.id);
            if (!user) {
                res.status(404).json("User not found");
            }
            else {res.status(200).json(user)};
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"})
        }
    },

    updateUser: async (req, res) => {
        try {
            await userModel.updateAUser(
                req.params.id,
                req.body,
            );
            res.status(201).json("User successfully updated");
        } catch (error) {
            res.status(500).json({error: "Internal server error"})
        }
    },


};