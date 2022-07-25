"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("routeRates", {
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" },
        ofDelete: "SET NULL",
        onUpdate: "CASCADE",
        primaryKey: true,
      },
      routeId: {
        type: Sequelize.INTEGER,
        references: { model: "Routes", key: "id" },
        ofDelete: "SET NULL",
        onUpdate: "CASCADE",
        primaryKey: true,
      },
      rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deletedAt: Sequelize.DATE,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("routeRates");
  },
};
