"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class routeRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      routeRate.belongsTo(models.Route);
      routeRate.belongsTo(models.User);
    }
  }
  routeRate.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      routeId: {
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
      modelName: "routeRate",
      paranoid: true,
    }
  );
  return routeRate;
};
