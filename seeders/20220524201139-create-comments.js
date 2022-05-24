'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('poiComments', [
      {
        userId: 1,
        poiId: 1,
        comment:
          'Muy lindo lugar, recomiendo llegar temprano para poder ingresar.',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        poiId: 2,
        comment: 'Hermosa la misa del domingo!!!',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        poiId: 3,
        comment: 'Imponente lugar, increible que sea gratis!',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        poiId: 4,
        comment: 'Recomendadisimo el recorrido guiado a la torre.',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        poiId: 7,
        comment: 'Muy buenas las cosas que se ven!',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        poiId: 1,
        comment: 'Una joyita imperdible de la Ciudad.',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        poiId: 2,
        comment: 'Llegar temprano para poder ingresar a la misa!',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        poiId: 5,
        comment: 'Un clasico de la Ciudad, infaltable unos mates en el predio.',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        poiId: 9,
        comment: 'Vivooos??',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        poiId: 7,
        comment: 'Muy piola la gente que atiende el lugar!',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 3,
        poiId: 1,
        comment: 'Hermoso lugar, recomiendo probar el cafe del bar del frente.',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 3,
        poiId: 2,
        comment: 'Imperdible la misa del domingo.',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 3,
        poiId: 6,
        comment:
          'No defrauda, solo no olviden seguir la directivas del personal para cuidar las obras.',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 4,
        poiId: 9,
        comment:
          'Muy divertido lugar, lleve a mis hijos y quedaros fascinados!',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 4,
        poiId: 4,
        comment: 'Si visitas Cordoba no podes perderte este emblematico lugar.',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 4,
        poiId: 5,
        comment:
          'Una locura las obras de este lugar, infaltable el equipo de mate para la salida!',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('poiComments', null, {});
  },
};
