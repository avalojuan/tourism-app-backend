'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('poiComments', {
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
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
      comment: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('poiComments');
  },
};
