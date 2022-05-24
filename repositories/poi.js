const db = require('../models');
const ResourceNotFound = require('../errors/resourceNotFound');
const Sequelize = require('../models/index');

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
  const pois = await db.poi.findAll({
    group: [
      'poi.id',
      'poiRates.poiId',
      'poiComments.userId',
      'poiComments.poiId',
    ],
    attributes: {
      include: [
        [db.sequelize.fn('SUM', db.sequelize.col('poiRates.rate')), 'rateSum'],
        [
          db.sequelize.fn('COUNT', db.sequelize.col('poiRates.rate')),
          'rateCount',
        ],
      ],
    },
    include: [
      {
        model: db.poiRate,
        attributes: [],
      },
      {
        model: db.poiComment,
        include: [
          {
            model: db.User,
            attributes: ['name'],
          },
        ],
      },
      {
        model: db.User,
        attributes: ['name'],
      },
    ],
  });
  return pois;
};

const addComment = async (userId, poiId, comment) => {
  const newComment = await db.poiComment.create({
    poiId,
    userId,
    comment,
  });
  return newComment;
};

const addRate = async (userId, poiId, rate) => {
  const newRate = await db.poiRate.create({
    poiId,
    userId,
    rate,
  });
  return newRate;
};

module.exports = {
  create,
  list,
  addComment,
  addRate,
};
