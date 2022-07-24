const db = require("../models");
const ResourceNotFound = require("../errors/resourceNotFound");
const Sequelize = require("../models/index");

const list = async () => {
  const routes = await db.Route.findAll({
    include: [{ model: db.User, attributes: ["name", "pictureUrl"] }],
  });
  return routes;
};
const search = async (id) => {
  const route = await db.Route.findByPk(id, {
    include: [
      {
        model: db.poi,
        attributes: ["id"],
      },
      {
        model: db.User,
        attributes: ["name", "pictureUrl"],
      },
    ],
  });
  return route;
};

const create = async (userId, title, description, pois) => {
  const newRoute = await db.Route.create({
    userId,
    name: title,
    description,
  });
  const poiList = pois.map((poi) => {
    return {
      routeId: newRoute.id,
      poiId: poi[1],
      order: poi[0],
    };
  });
  const addPois = await db.routepois.bulkCreate(poiList);
  return newRoute;
};

module.exports = {
  create,
  list,
  search,
};
