const { db } = require("../__config/db.js");
const bcrypt = require("bcrypt");

module.exports = {
    createUser: async (userInfo) => {
        const {username, password, email, first_name, last_name} = userInfo;

        const trx = await db.transaction();

        try {

            const [user] = await trx("users").insert(
                { email, username, first_name, last_name },
                ["username", "id"]
            );
          
          
            const hashPassword = await bcrypt.hash(password + "", 10);

          await trx("hashpwd").insert({
                id: user.id,
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

    getUserByID: async(id) => {
        try {
            const user = await db("users")
            .select("*")
            .join('hashpwd', {"users.username": "hashpwd.username"})
            .where("users.id", id)
            .first();
            return user;
        } catch (error) {
            throw error
        }
    },

    // updateUserByID: async(id, email, username, first_name, last_name) => {
    //     const trx = await db.transaction();
    //     try {
    //         await trx("users")
    //         .join('hashpwd', {"users.id": "hashpwd.id"})
    //         .update({email, username, first_name, last_name})
    //         .where("users.id", id);

    //         trx.commit();
    //     } catch (error) {
    //         trx.rollback();
    //         console.log(error);
    //         throw error;
    //     }
    // },

    updateAUser: async(id, user) => {
        const { email, username, first_name, last_name } = user;
        return await db.transaction(async (trx) => {
          try {
            const oldUser = await trx("users").where({ id }).first();
      
            if (email && email !== oldUser.email) {
              const existingEmail = await trx("users").where({ email }).first();
              if (existingEmail) {
                throw new Error("Email is already taken");
              }
            };
      
            if (username && username !== oldUser.username) {
              const existingUsername = await trx("users").where({ username }).first();
              if (existingUsername) {
                throw new Error("Username is already taken");
              }
            }
      
            await trx("users")
              .where({ id })
              .update({ email, username, first_name, last_name });
      
            await trx.commit();
            return true;
          } catch (error) {
            await trx.rollback();
            console.error("Transaction rolled back due to error:", error);
            throw error;
          }
        });
      },

    getUserByUsername: async(email, username) => {
        try {
            const user = await db("users")
            .select("users.id", "users.username", "hashpwd.password")
            .join('hashpwd', {"users.username": "hashpwd.username"})
            .where("users.username", username)
            .orWhere("users.email", email)
            .first();
            return user;
        } catch (error) {
            throw error
        }
    },
    
    getAllUsers: async() => {
        try {
            const users = await db("users");
            console.log(users);
            return users;
        } catch (error) {
            throw error;
        }
    }
};