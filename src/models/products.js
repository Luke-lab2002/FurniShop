'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.hasMany(models.OrdersDetails, {
        foreignKey:"order_id",
        as:"OrdersDetails"
      }),

      Products.belongsTo(models.Admins, {
        foreignKey:"admin_id",
        as:"Admins"
      })
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTERGER,
    url_image: DataTypes.STRING,
    code: DataTypes.STRING,
    admin_id: DataTypes.INTERGER,
    description: DataTypes.TEXT

  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};