const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    version: {
      type: DataTypes.STRING,
    },
    public_id: {
      type: DataTypes.STRING,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    has_gluten: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    has_eggs: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    has_dairy: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    has_shellfish: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;
