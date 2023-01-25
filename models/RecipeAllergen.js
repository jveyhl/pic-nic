const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class RecipeAllergen extends Model {}

RecipeAllergen.init(
  {
    // define columns
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define allergen_id column
    allergen_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "allergen",
        key: "id",
      },
    },
    // define recipe_id column
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "recipe",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe_allergen",
  }
);

module.exports = RecipeAllergen;