const poiService = require('../services/poi');

const create = async (poiAttributes) => {
  const newPoi = await poiService.create(poiAttributes);
  return newPoi;
};

const list = async () => {
  const pois = await poiService.list();
  return { message: 'List of pois', data: pois };
};

const addComment = async (userId, poiId, rate, comment) => {
  const newComment = await poiService.addComment(userId, poiId, rate, comment);
  return {
    message: 'Comment added',
    data: { poi: { id: newComment.id, title: newComment.title } },
  };
};

module.exports = {
  create,
  list,
  addComment,
};
