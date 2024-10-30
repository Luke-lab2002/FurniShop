'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdersDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrdersDetails.belongsTo(models.Users, {
        foreignKey:"order_id",
        as:"Order"
      })

      OrdersDetails.belongsTo(models.Products, {
        foreignKey:"order_id",
        as:"Products"
      })
    }
  }
  OrdersDetails.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrdersDetails',
  });
  return OrdersDetails;
};