'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommentProducts.init({
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    product_id: DataTypes.INTEGER,
    state_notifi: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CommentProducts',
  });
  return CommentProducts;
};