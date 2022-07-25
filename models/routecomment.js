"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class routeComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      routeComment.belongsTo(models.Route);
      routeComment.belongsTo(models.User);
    }
  }
  routeComment.init(
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
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "routeComment",
    }
  );
  return routeComment;
};
