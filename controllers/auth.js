const authService = require('../services/auth');

const register = async (name, email, password) => {
  const newUser = await authService.register(name, email, password);
  return {
    'new user': { id: newUser.id, name: newUser.name, email: newUser.email },
  };
};

const login = async (email, password) => {
  const user = await authService.login(email, password);
  let userData = user.user;
  let token = user.token;
  return {
    logged: {
      id: userData.id,
      name: userData.name,
      emailData: user.email,
      token: token,
    },
  };
};

module.exports = {
  register,
  login,
};
