const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Allergen extends Model {}

Allergen.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'allergen',
  }
);

module.exports = Allergen;
