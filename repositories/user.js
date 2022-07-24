const db = require("../models");

const create = async (name, email, hashedPw, pictureUrl) => {
  const password = hashedPw;
  const newUser = await db.User.create({
    name,
    email,
    password,
    pictureUrl,
  });

  return newUser;
};

const searchByEmail = async (email) => {
  const user = await db.User.findOne({ where: { email: email } });
  return user;
};

const searchById = async (id) => {
  const user = await db.User.findByPk(id, {
    attributes: ["id", "name", "email", "pictureUrl", "createdAt", "updatedAt"],
  });
  return user;
};

const update = async (id, name, pictureUrl) => {
  const user = await db.User.update(
    {
      name,
      pictureUrl,
    },
    {
      where: { id: id },
    }
  );
  return user;
};
module.exports = {
  create,
  searchByEmail,
  searchById,
  update,
};
