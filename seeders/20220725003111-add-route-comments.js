"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("routeComments", [
      {
        userId: 1,
        routeId: 1,
        comment: "Muy bien pensada la ruta.",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        routeId: 2,
        comment: "La pasamos muy bien en este recorrido.",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        routeId: 3,
        comment: "Recomiendo arrancar temprano!!",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        routeId: 4,
        comment: "Recomendadisimo el recorrido guiado!",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 1,
        routeId: 7,
        comment: "Muy buenas las cosas que se ven!",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        routeId: 1,
        comment: "Un recorrido imperdible en la cityy",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        routeId: 2,
        comment: "Arrancar temprano, tener a mano agua en verano.",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        routeId: 5,
        comment: "No cuesta nada hacerlo caminando.",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        routeId: 9,
        comment: "La pasamos genial!",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 2,
        routeId: 7,
        comment: "Muy piola la gente que atiende el primer lugar!",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 3,
        routeId: 1,
        comment:
          "Hermoso lugar, recomiendo probar el cafe del bar del frente del segundo lugar.",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 3,
        routeId: 2,
        comment: "Imperdible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 3,
        routeId: 6,
        comment:
          "No defrauda, siempre que puedo llevo mi familia a hacer este recorrido.",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 4,
        routeId: 9,
        comment: "Muy divertido, lleve a mis hijos y quedaros fascinados!",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 4,
        routeId: 4,
        comment: "Si visitas Cordoba no podes perderte estos lugares.",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: 4,
        routeId: 5,
        comment:
          "Cuidarse del calor en verano, sobre todo si se hace caminando!",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("routeComments", null, {});
  },
};
