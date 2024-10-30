'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentArticle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommentArticle.init({
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    article_id: DataTypes.INTEGER,
    state_notifi: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CommentArticle',
  });
  return CommentArticle;
};