const { db } = require("../config/db.js");

const bcrypt = require("bcrypt");

module.exports = {
    createUser: async (userInfo) => {
        const {username, password, email, first_name, last_name} = userInfo;

        const trx = await db.transaction();

        try {

            const [user] = await trx("users").insert(
                {email, username, first_name, last_name},
                ["username", "id"]
            );
          const hashPassword = await bcrypt.hash(password + "", 10);

          await trx('hashpwd').insert(
            {
                username: user.username,
                password: hashPassword,

            });


          await trx.commit();

          return user;

        } catch (error) {
            await trx.rollback();
            throw error;
        }
    },

    getUserByUsername: async(email, username) => {
        try {
            const user = await db("users")
            .select('users.id', 'users.username', 'hashpwd.password')
            .join('hashpwd', {"users.username": "hashpwd.username"})
            .where("users.username", username)
            .orWhere("users.email", email)
            .first();
        } catch (error) {
            throw error
        }
    },
    
    getAllUsers: async() => {
        try {
            const users = await db("users");
            return users;
        } catch (error) {
            throw error;
        }
    }
};