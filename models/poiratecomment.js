'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class poiRateComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      poiRateComment.belongsTo(models.poi);
      poiRateComment.belongsTo(models.User);
    }
  }
  poiRateComment.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      poiId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'poiRateComment',
      paranoid: true,
    }
  );
  return poiRateComment;
};
