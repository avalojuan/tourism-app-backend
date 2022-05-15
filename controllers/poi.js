const poiService = require('../services/poi');

const create = async (poiAttributes) => {
  const newPoi = await poiService.create(poiAttributes);
  return newPoi;
};

module.exports = {
  create,
};
