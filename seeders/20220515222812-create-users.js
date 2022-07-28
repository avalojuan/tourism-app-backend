"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "Municipalidad de Cordoba",
        email: "muni@test.com",
        password:
          "$2b$10$n/WnJ5jF1TjAEEDFsO0Ho.qc18HHaEbTEQT3/3FX87WCiuZm20gQy",
        pictureUrl:
          "https://res.cloudinary.com/avalojuan/image/upload/v1658985180/tourism/cordoba_hygowt.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        name: "Martina Perez",
        email: "martina@test.com",
        password:
          "$2b$10$n/WnJ5jF1TjAEEDFsO0Ho.qc18HHaEbTEQT3/3FX87WCiuZm20gQy",
        pictureUrl:
          "https://res.cloudinary.com/avalojuan/image/upload/v1658985305/tourism/D8dDZukXUAAXLdY_t4qqx1.jpg",

        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 3,
        name: "Luis Gomez",
        email: "juan@test.com",
        password:
          "$2b$10$n/WnJ5jF1TjAEEDFsO0Ho.qc18HHaEbTEQT3/3FX87WCiuZm20gQy",
        pictureUrl:
          "https://res.cloudinary.com/avalojuan/image/upload/v1658985489/tourism/edit-Kiran-Jonnalagadda_pexp7l.webp",

        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 4,
        name: "Fede Gutierres",
        email: "jose@test.com",
        password:
          "$2b$10$n/WnJ5jF1TjAEEDFsO0Ho.qc18HHaEbTEQT3/3FX87WCiuZm20gQy",
        pictureUrl:
          "https://res.cloudinary.com/avalojuan/image/upload/v1658985564/tourism/photo-1499996860823-5214fcc65f8f_qgoghq.jpg",

        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
