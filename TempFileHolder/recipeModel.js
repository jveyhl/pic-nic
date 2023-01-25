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
    ingrediants: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
            isValidIngrediantFormat: function(value) {
                if(!Array.isArray(value)) {
                    throw new err ('Ingrediants need to be an array');
                }
                for (let i=0; i < value.length; i++) {
                    let ingredient= value[i];
                    if(!ingredient.name || !ingredient.quantity || !ingredient.measurement) {
                        throw new err ('Ingredients need to have a name, quantity, and measurement');
                    }
                    if(typeof ingredient.name !== 'string') {
                        throw new err ('Ingredient name needs to be a string');
                    }
                    if (isNaN(ingredient.quantity)) {
                        throw new err ('Quantity needs to be a number');
                    }
                    if (typeof ingredient.measurement !== 'string') {
                        throw new err ('Measurement needs to be a string');
                    }
                }
            }
        }
        // This looks like the following 
        // {name: "STRING OF NAME OF INGREDIANT", quantity: "Number describing amount of measurement", measurement: 'name of measurement'}
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allergens: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'allergen',
        key: 'id',
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
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
