const User = require('./User');
const Recipe = require('./Recipe');
const Comment = require('./Comment')

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
});

// Recipe.hasMany(Comment, {
//   foreignKey: 'recipe_id',
// })



Comment.belongsTo(User, {
  foreignKey: 'user_id',
})

Comment.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
})

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})


module.exports = { User, Recipe, Comment };
