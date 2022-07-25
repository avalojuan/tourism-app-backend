const db = require("../models");
const ResourceNotFound = require("../errors/resourceNotFound");
const Sequelize = require("../models/index");

// const list = async () => {
//   const routes = await db.Route.findAll({
//     include: [{ model: db.User, attributes: ["name", "pictureUrl"] }],
//   });
//   return routes;
// };

const list = async () => {
  const routes = await db.Route.findAll({
    group: [
      "Route.id",
      "routeRates.routeId",
      "routeComments.userId",
      "routeComments.routeId",
    ],
    attributes: {
      include: [
        [
          db.sequelize.fn("SUM", db.sequelize.col("routeRates.rate")),
          "rateSum",
        ],
        [
          db.sequelize.fn("COUNT", db.sequelize.col("routeRates.rate")),
          "rateCount",
        ],
      ],
    },
    include: [
      {
        model: db.routeRate,
        attributes: [],
      },
      {
        model: db.routeComment,
        include: [
          {
            model: db.User,
            attributes: ["name"],
          },
        ],
      },
      {
        model: db.User,
        attributes: ["name", "pictureUrl"],
      },
    ],
  });
  return routes;
};

const search = async (id) => {
  const route = await db.Route.findByPk(id, {
    include: [
      {
        model: db.poi,
        attributes: ["id"],
      },
      {
        model: db.User,
        attributes: ["name", "pictureUrl"],
      },
    ],
  });
  return route;
};

// const getRate = async () => {
//   const rate = await db.Route.findAll({
//     group: [
//       "route.id",
//       "routeRates.routeId",
//       "routeComments.userId",
//       "routeComments.routeId",
//     ],
//     attributes: {
//       include: [
//         [
//           db.sequelize.fn("SUM", db.sequelize.col("routeRates.rate")),
//           "rateSum",
//         ],
//         [
//           db.sequelize.fn("COUNT", db.sequelize.col("routeRates.rate")),
//           "rateCount",
//         ],
//       ],
//     },
//   });
//   return rate;
// };

const create = async (userId, title, description, pois) => {
  const newRoute = await db.Route.create({
    userId,
    name: title,
    description,
  });
  const poiList = pois.map((poi) => {
    return {
      routeId: newRoute.id,
      poiId: poi[1],
      order: poi[0],
    };
  });
  const addPois = await db.routepois.bulkCreate(poiList);
  return newRoute;
};

const addComment = async (userId, routeId, comment) => {
  const newComment = await db.routeComment.create({
    routeId,
    userId,
    comment,
  });
  return newComment;
};

const addRate = async (userId, routeId, rate) => {
  const newRate = await db.routeRate.create({
    routeId,
    userId,
    rate,
  });
  return newRate;
};

module.exports = {
  create,
  list,
  search,
  addComment,
  addRate,
};
