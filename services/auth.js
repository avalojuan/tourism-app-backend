const authRepository = require('../repositories/auth');
const ResourceNotFound = require('../errors/resourceNotFound');
const Unauthorized = require('../errors/unauthorized');

const { pwEncript, pwCheck } = require('../helpers/encryptionHandler');

const register = async (name, email, password) => {
  const hashedPw = await pwEncript(password);
  return authRepository.register(name, email, hashedPw);
};

const login = async (email, password) => {
  const user = await authRepository.login(email);
  if (!user) throw new ResourceNotFound('User Not Found');
  const isCorrectPassword = await pwCheck(password, user.password);
  if (!isCorrectPassword) throw new Unauthorized('Incorrect password');
  return user;
};

module.exports = {
  register,
  login,
};
