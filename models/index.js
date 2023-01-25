const User = require('./User');
const Recipe = require('./Recipe');
const Allergen = require('./Allergen');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
});

Allergen

module.exports = { User, Recipe };
