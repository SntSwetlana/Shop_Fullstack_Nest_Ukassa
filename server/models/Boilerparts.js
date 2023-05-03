'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Boilerparts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Boilerparts.init(
    {
      boiler_manufacturer: DataTypes.STRING,
      price: DataTypes.NUMBER,
      parts_manufacturer: DataTypes.STRING,
      vendor_code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      images: DataTypes.STRING,
      in_stock: DataTypes.NUMBER,
      bestseller: DataTypes.boolean,
      new: DataTypes.boolean,
      popularity: DataTypes.NUMBER,
      compatibility: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Boilerparts',
    },
  );
  return Boilerparts;
};
