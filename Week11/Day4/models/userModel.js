const { db } = require("../config/db.js");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (userinfo) => {
    const { username, password, email, first_name, last_name } = userinfo;

    const trx = await db.transaction();

    try {
      // insert user data into 'users' table

      //hash the password and insert into the' hashpwd table
      const hashPassword = await bcrypt.hash(password + "", 10);

      const [user] = await trx("authusers").insert({ email, password: hashPassword }, [
        "email",
        "id",
      ]);

      // await trx("hashpwd").insert({
      //   username: user.username,
      //   password: hashPassword,
      // });

      await trx.commit();

      return user;
    } catch (error) {
      await trx.rollback();
      console.log(error);
      throw error;
    }
  },

  getUserByUsername: async (email = "", username = "") => {
    try {
      const user = await db("authusers")
        .select("id", "email", "password")
        .where("email", email)
        .first();
      return user;
    } catch (error) {
      throw error;
    }
  },

  getAllUsers: async () => {
    try {
      const users = await db("authusers");
      return users;
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (id) => {
    try {
      const [user] = await db("authusers").where({id});
      return user;
    } catch (error) {
      throw error;
    }
  },

  updateRefreshToken: async(refresh, id) => {
    try {
      const user = await db('authusers')
      .update({token : refresh})
      .where({ id })
      return user;
    } catch (error) {
      throw error
    }
  }

};