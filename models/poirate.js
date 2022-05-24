'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class poiRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      poiRate.belongsTo(models.poi);
      poiRate.belongsTo(models.User);
    }
  }
  poiRate.init(
    {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: DataTypes.INTEGER,
      // },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      poiId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'poiRate',
      paranoid: true,
    }
  );
  return poiRate;
};
