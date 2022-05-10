const db = require('../models');

const register = async (name, email, hashedPw) => {
  const password = hashedPw;
  const newUser = await db.User.create({
    name,
    email,
    password,
  });

  return newUser;
};

const login = async (email) => {
  const user = await db.User.findOne({ where: { email: email } });
  console.log(user);
  return user;
};

module.exports = {
  register,
  login,
};
