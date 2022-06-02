const routeRepository = require('../repositories/route');

const create = (userId, title, description, pois) => {
  return routeRepository.create(userId, title, description, pois);
};

module.exports = {
  create,
};
