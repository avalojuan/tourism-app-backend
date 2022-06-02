const routeService = require('../services/route');

const create = async (userId, title, description, pois) => {
  const newRoute = await routeService.create(userId, title, description, pois);
  return { message: 'Route Added', data: newRoute };
};

module.exports = {
  create,
};
