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
      Articles.belongsTo(models.Admin, {
        foreignKey:"admin_id",
        as:"Admin"
      }), 
      Articles.hasMany(models.CommentArticle, {
        foreignKey:"article_id",
        as:"CommentArticle"
      })
    }
  }
  Articles.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    url_image: DataTypes.STRING,
    admin_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Articles',
  });
  return Articles;
};