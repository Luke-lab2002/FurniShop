'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Oder.belongsTo(models.User,{
        foreignKey:'user_id',
        as:'users'
      })
    }
  }
  Oder.init({
    user_id: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    state_notifi: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Oder',
  });
  return Oder;
};