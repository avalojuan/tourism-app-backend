'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('poiRates', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER,
      // },
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
    await queryInterface.dropTable('poiRateComments');
  },
};
