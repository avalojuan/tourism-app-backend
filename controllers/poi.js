const poiService = require("../services/poi");

const create = async (poiAttributes) => {
  const newPoi = await poiService.create(poiAttributes);
  return newPoi;
};

const list = async () => {
  const pois = await poiService.list();
  return { message: "List of pois", data: pois };
};

const search = async (id) => {
  const pois = await poiService.search(id);
  return { message: "Found pois", data: pois };
};

const addComment = async (userId, poiId, comment) => {
  const newComment = await poiService.addComment(userId, poiId, comment);
  return {
    message: "Comment added",
    data: newComment,
  };
};

const addRate = async (userId, poiId, rate) => {
  const newRate = await poiService.addRate(userId, poiId, rate);
  return {
    message: "Rate added",
    data: newRate,
  };
};

module.exports = {
  create,
  list,
  addComment,
  addRate,
  search,
};
