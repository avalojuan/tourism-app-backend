const poiService = require('../services/poi');

const create = async (poiAttributes) => {
  const newPoi = await poiService.create(poiAttributes);
  return newPoi;
};

const list = async () => {
  const pois = await poiService.list();
  return { message: 'List of pois', data: pois };
};

module.exports = {
  create,
  list,
};
