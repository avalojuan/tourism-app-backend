const routeService = require('../services/route');

const list = async () => {
  const routes = await routeService.list();
  return { message: 'List of routes', data: routes };
};

const create = async (userId, title, description, pois) => {
  const newRoute = await routeService.create(userId, title, description, pois);
  return { message: 'Route Added', data: newRoute };
};

module.exports = {
  create,
  list
};
