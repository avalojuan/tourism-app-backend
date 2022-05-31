'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class routepois extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  routepois.init(
    {
      routeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      poiId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      order: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'routepois',
    }
  );
  return routepois;
};
