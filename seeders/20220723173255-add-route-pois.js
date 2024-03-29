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
        poiId: 5,
        order: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 2,
        poiId: 6,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 2,
        poiId: 8,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 2,
        poiId: 9,
        order: 3,
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
      {
        routeId: 4,
        poiId: 1,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 4,
        poiId: 2,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 5,
        poiId: 1,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 5,
        poiId: 2,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 6,
        poiId: 1,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 6,
        poiId: 2,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 7,
        poiId: 1,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 7,
        poiId: 2,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 8,
        poiId: 1,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 8,
        poiId: 2,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 9,
        poiId: 1,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeId: 9,
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
