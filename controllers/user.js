const userService = require("../services/user");

const search = async (id) => {
  const user = await userService.search(id);
  return { message: "User detail", data: user };
};

module.exports = {
  search,
};
