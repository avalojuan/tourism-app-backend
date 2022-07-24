const authRepository = require("../repositories/user");
const ResourceNotFound = require("../errors/resourceNotFound");
const Unauthorized = require("../errors/unauthorized");
const { createToken } = require("../middlewares/tokenHandler");

const { pwEncript, pwCheck } = require("../helpers/encryptionHandler");

const register = async (name, email, password, pictureUrl) => {
  const hashedPw = await pwEncript(password);
  return authRepository.create(name, email, hashedPw, pictureUrl);
};

const login = async (email, password) => {
  const user = await authRepository.searchByEmail(email);
  if (!user) throw new ResourceNotFound("User Not Found");
  const isCorrectPassword = await pwCheck(password, user.password);
  if (!isCorrectPassword) throw new Unauthorized("Incorrect password");
  const token = await createToken({
    id: user.id,
    name: user.id,
    email: user.email,
  });
  return { user, token };
};

module.exports = {
  register,
  login,
};
