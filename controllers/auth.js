const authService = require('../services/auth');

const register = async (name, email, password) => {
  const newUser = await authService.register(name, email, password);
  return {
    'new user': { id: newUser.id, name: newUser.name, email: newUser.email },
  };
};

const login = async (email, password) => {
  const user = await authService.login(email, password);
  return { logged: { id: user.id, name: user.name, email: user.email } };
};

module.exports = {
  register,
  login,
};
