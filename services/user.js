const userRepository = require("../repositories/user");

const search = async (id) => {
  const user = await userRepository.searchById(id);
  return user;
};

const update = (id, name, pictureUrl) => {
  return userRepository.update(id, name, pictureUrl);
};

module.exports = {
  search,
  update,
};
