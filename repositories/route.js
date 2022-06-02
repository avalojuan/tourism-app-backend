const db = require('../models');
const ResourceNotFound = require('../errors/resourceNotFound');
const Sequelize = require('../models/index');

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
};
