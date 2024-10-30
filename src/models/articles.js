'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Articles.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    url_image: DataTypes.STRING,
    id_admin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Articles',
  });
  return Articles;
};