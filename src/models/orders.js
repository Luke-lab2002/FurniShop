'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.belongsTo(models.Users, {
        foreignKey:"user_id",
        as:"Users"
      }),

      Orders.hasMany(models.Users, {
        foreignKey:"order_id",
        as:"OrderDetails"
      })
    }
  }
  Orders.init({
    user_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    state_id: DataTypes.INTEGER,
    state_notifi: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};