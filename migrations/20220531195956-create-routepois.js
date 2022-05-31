'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('routepois', {
      routeId: {
        type: Sequelize.INTEGER,
        references: { model: 'Routes', key: 'id' },
        ofDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      poiId: {
        type: Sequelize.INTEGER,
        references: { model: 'pois', key: 'id' },
        ofDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      order: {
        type: Sequelize.INTEGER,
      },
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
    await queryInterface.dropTable('routepois');
  },
};
