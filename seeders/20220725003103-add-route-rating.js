'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('routeRates', [
      {
        userId: 1,
        routeId: 1,
        rate: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        routeId: 2,
        rate: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        routeId: 3,
        rate: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        routeId: 4,
        rate: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        routeId: 7,
        rate: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        routeId: 1,
        rate: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        routeId: 2,
        rate: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        routeId: 5,
        rate: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        routeId: 9,
        rate: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        routeId: 7,
        rate: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 3,
        routeId: 1,
        rate: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 3,
        routeId: 2,
        rate: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 3,
        routeId: 6,
        rate: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 3,
        routeId: 7,
        rate: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 4,
        routeId: 1,
        rate: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 4,
        routeId: 9,
        rate: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 4,
        routeId: 7,
        rate: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 4,
        routeId: 5,
        rate: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('routeRates', null, {});
  },
};
