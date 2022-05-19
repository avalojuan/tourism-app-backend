'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('poiRateComments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
        ofDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      poiId: {
        type: Sequelize.INTEGER,
        references: { model: 'pois', key: 'id' },
        ofDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('poiRateComments');
  },
};
