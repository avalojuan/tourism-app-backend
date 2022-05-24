'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class poiComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      poiComment.belongsTo(models.poi);
      poiComment.belongsTo(models.User);
    }
  }
  poiComment.init(
    {
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
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'poiComment',
    }
  );
  return poiComment;
};
