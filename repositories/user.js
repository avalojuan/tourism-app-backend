const db = require("../models");

const create = async (name, email, hashedPw, pictureUrl) => {
  const password = hashedPw;
  const newUser = await db.User.create({
    name,
    email,
    password,
    pictureUrl,
  });

  return newUser;
};

const searchByEmail = async (email) => {
  const user = await db.User.findOne({ where: { email: email } });
  return user;
};

const searchById = async (id) => {
  console.log(id);
  const user = await db.User.findByPk(id, {
    attributes: ["id", "name", "email", "createdAt", "updatedAt"],
  });
  return user;
};
module.exports = {
  create,
  searchByEmail,
  searchById,
};
