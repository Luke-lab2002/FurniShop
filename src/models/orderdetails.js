'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetails.belongsTo(model.Orders, {
        foreignKey:"order_id",
        as:"Orders"
      }),

      OrderDetails.belongsTo(models.Products, {
        foreignKey:"product_id",
        as:"Products"
      })
    }
  }
  OrderDetails.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};