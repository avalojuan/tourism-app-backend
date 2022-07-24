const authService = require("../services/auth");

const register = async (name, email, password, pictureUrl) => {
  const newUser = await authService.register(name, email, password, pictureUrl);
  return {
    "new user": {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      pictureUrl: newUser.pictureUrl,
    },
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
