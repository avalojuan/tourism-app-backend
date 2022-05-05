const { hash } = require('bcrypt');
const bcrypt = require('bcrypt');
const saltRounds = 10; //for now

const pwEncript = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, saltRounds);
};

const pwCheck = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

module.exports = {
  pwEncript,
  pwCheck,
};
