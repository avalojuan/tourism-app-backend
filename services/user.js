const userRepository = require("../repositories/user");

const search = async (id) => {
  const user = await userRepository.searchById(id);
  return user;
};

module.exports = {
  search,
};
