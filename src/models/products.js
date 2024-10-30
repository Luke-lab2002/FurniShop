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
      Products.hasMany(models.OrderDetails, {
        foreignKey:"product_id",
        as:"OrderDetails"
      }),

      Products.hasMany(models.CommentProducts, {
        foreignKey:"product_id",
        as:"CommentProducts"
      }),

      Products.belongsTo(models.Admin, {
        foreignKey:"admin_id",
        as:"Admin"
      })
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    url_image: DataTypes.STRING,
    code: DataTypes.STRING,
    admin_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};