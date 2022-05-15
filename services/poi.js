const db = require('../models');
const poiRepository = require('../repositories/poi');
const userRepository = require('../repositories/user');
const ResourceNotFound = require('../errors/resourceNotFound');

const create = async (poiAttributes) => {
  const user = await userRepository.searchById(poiAttributes.userId);
  if (!user) throw new ResourceNotFound('User Not Found');
  newPoi = await poiRepository.create(poiAttributes);
};

module.exports = {
  create,
};
