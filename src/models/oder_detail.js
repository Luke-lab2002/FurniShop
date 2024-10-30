'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class oder_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  oder_detail.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    number_products: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'oder_detail',
  });
  return oder_detail;
};