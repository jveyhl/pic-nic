const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const RecipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!Recipe) {
      res.status(404).json({ message: 'No Recipe found with this id!' });
      return;
    }

    res.status(200).json(RecipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

