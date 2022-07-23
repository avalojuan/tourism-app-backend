'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('routes', [
      {
        id: 1,
        userId: 1,
        name: 'Con iglesias 01',
        description: "Conoce las mejores iglesias de cordoba en este fabuloso recorrido de 4 horas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        userId: 2,
        name: 'Con iglesias 02',
        description: "Conoce las mejores iglesias de cordoba en este fabuloso recorrido de 4 horas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 3,
        userId: 3,
        name: 'Con iglesias 03',
        description: "Conoce las mejores iglesias de cordoba en este fabuloso recorrido de 4 horas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 4,
        userId: 4,
        name: 'Con iglesias 04',
        description: "Conoce las mejores iglesias de cordoba en este fabuloso recorrido de 4 horas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 5,
        userId: 2,
        name: 'Con iglesias 05',
        description: "Conoce las mejores iglesias de cordoba en este fabuloso recorrido de 4 horas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 6,
        userId: 3,
        name: 'Con iglesias 06',
        description: "Conoce las mejores iglesias de cordoba en este fabuloso recorrido de 4 horas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 7,
        userId: 4,
        name: 'Con iglesias 07',
        description: "Conoce las mejores iglesias de cordoba en este fabuloso recorrido de 4 horas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 8,
        userId: 2,
        name: 'Con iglesias 08',
        description: "Conoce las mejores iglesias de cordoba en este fabuloso recorrido de 4 horas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 9,
        userId: 2,
        name: 'Con iglesias 09',
        description: "Conoce las mejores iglesias de cordoba en este fabuloso recorrido de 4 horas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('routes', null, {});
  },
};
