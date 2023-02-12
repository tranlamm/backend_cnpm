'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Voucher.init({
    ID_Voucher: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING(45),
    value : DataTypes.STRING(45),
    capability : DataTypes.INTEGER,
    expired_at: DataTypes.DATETIME,
    condition : DataTypes.INTEGER,
    description : DataTypes.STRING,
    del_yn : DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};