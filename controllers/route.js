const routeService = require("../services/route");

const list = async () => {
  const routes = await routeService.list();
  return { message: "List of routes", data: routes };
};

const search = async (id) => {
  const route = await routeService.search(id);
  return { message: "Route detail", data: route };
};

const create = async (userId, title, description, pois) => {
  const newRoute = await routeService.create(userId, title, description, pois);
  return { message: "Route Added", data: newRoute };
};

const addComment = async (userId, routeId, comment) => {
  const newComment = await routeService.addComment(userId, routeId, comment);
  return {
    message: "Comment added",
    data: newComment,
  };
};

const addRate = async (userId, routeId, rate) => {
  const newRate = await routeService.addRate(userId, routeId, rate);
  return {
    message: "Rate added",
    data: newRate,
  };
};

module.exports = {
  create,
  list,
  search,
  addComment,
  addRate,
};
