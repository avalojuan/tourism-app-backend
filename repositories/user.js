const db = require('../models');

const create = async (name, email, hashedPw) => {
  const password = hashedPw;
  const newUser = await db.User.create({
    name,
    email,
    password,
  });

  return newUser;
};

const searchByEmail = async (email) => {
  const user = await db.User.findOne({ where: { email: email } });
  return user;
};

const searchById = async (id) => {
  const user = await db.User.findByPk(id);
  return user;
};
module.exports = {
  create,
  searchByEmail,
  searchById,
};
