'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Orders, {
        foreignKey:"user_id",
        as:"Orders"
      }),

      Users.hasMany(models.CommentArticle, {
        foreignKey:"user_id",
        as:"CommentArticle"
      })

      Users.hasMany(models.CommentProducts, {
        foreignKey:"user_id",
        as:"CommentProducts"
      })
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    ban: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};