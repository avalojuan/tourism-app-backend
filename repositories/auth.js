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

module.exports = {
  register,
};
