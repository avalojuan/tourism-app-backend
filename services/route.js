const routeRepository = require("../repositories/route");
const poiRepository = require("../repositories/poi");

const list = () => {
  return routeRepository.list();
};

const search = async (id) => {
  const route = await routeRepository.search(id);
  const poiIdList = route.pois.map((poi) => poi.id);
  const pois = await poiRepository.search(poiIdList);
  return { route: route, pois: pois };
};

const create = (userId, title, description, pois) => {
  return routeRepository.create(userId, title, description, pois);
};

const addComment = (userId, routeId, comment) => {
  return routeRepository.addComment(userId, routeId, comment);
};

const addRate = (userId, routeId, rate) => {
  return routeRepository.addRate(userId, routeId, rate);
};

module.exports = {
  create,
  list,
  search,
  addComment,
  addRate,
};
