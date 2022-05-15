const db = require('../models');

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
    others: poiAttributes.others,
  });
  return newPoi;
};

module.exports = {
  create,
};
