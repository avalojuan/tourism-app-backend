const userService = require("../services/user");

const search = async (id) => {
  const user = await userService.search(id);
  return { message: "User detail", data: user };
};

const update = async (id, name, pictureUrl) => {
  const user = await userService.update(id, name, pictureUrl);
  return { message: "User updated", data: user };
};

module.exports = {
  search,
  update,
};
