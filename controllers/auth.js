const { pwEncript, pwCheck } = require('../helpers/encryptionHandler');
const authService = require('../services/auth');

const register = async (name, email, password) => {
  const hashedPw = await pwEncript(password);
  console.log(hashedPw);
  const newUser = await authService.register(name, email, hashedPw);
  return {
    'new user': { id: newUser.id, name: newUser.name, email: newUser.email },
  };
};

module.exports = {
  register,
};
