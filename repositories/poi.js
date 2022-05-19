const db = require('../models');
const ResourceNotFound = require('../errors/resourceNotFound');

const create = async (poiAttributes) => {
  console.log(poiAttributes);
  const newPoi = await db.poi.create({
    userId: poiAttributes.userId,
    title: poiAttributes.title,
    imageURL: poiAttributes.imageURL,
    description: poiAttributes.description,
    address: poiAttributes.address,
    latitude: poiAttributes.latitude,
    longitude: poiAttributes.longitude,
    cost: poiAttributes.cost,
    schedule: poiAttributes.schedule,
    contact: poiAttributes.contact,
    others: poiAttributes.others,
  });
  return newPoi;
};

const list = async () => {
  const pois = await db.poi.findAll();
  return pois;
};

const addComment = async (userId, poiId, rate, comment) => {
  const poi = await db.poi.findByPk(poiId);
  if (!poi) throw new ResourceNotFound('POI Not Found');
  poi.addPoiRateComment({ userId: userId, rate: rate, comment: comment });
  return poi;
};

module.exports = {
  create,
  list,
  addComment,
};
