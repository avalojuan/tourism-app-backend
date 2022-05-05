const authRepository = require('../repositories/auth');
const register = (name, email, hashedPw) => {
  return authRepository.register(name, email, hashedPw);
};

module.exports = {
  register,
};
