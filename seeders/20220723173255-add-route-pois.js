'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('routepois', [
      {
        routeId: 1,
        poiId: 1,
        order: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 1,
        poiId: 2,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 1,
        poiId: 3,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 2,
        poiId: 1,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 2,
        poiId: 2,
        order: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 2,
        poiId: 5,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 3,
        poiId: 5,
        order: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 3,
        poiId: 6,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 3,
        poiId: 2,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('routepois', null, {});
  },
};
