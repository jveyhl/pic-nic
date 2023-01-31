const router = require('express').Router();
const { Recipe, User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


// router.get('/random', async (req, res) => {
//   console.log("trying to access users/random");

// try {
//    var result = await Recipe.findAll({
//       attributes: {
//         include: [
//           [sequelize.fn('COUNT', sequelize.col('id')), 'n_ids']
//         ]
//       }
//       .then(console.log("there are this many recipes: " + result))

//     // }).then(function (result) {
//     //   var count = result[0].get('n_ids');
//     //   var random = Math.floor(Math.random() * count);
//     //   Recipe.findAll({
//     //     limit: 1,
//     //     offset: random
//     //   }).then(function (result) {
//     //     res.json(result);
//     //   });


//   });

// } catch (err) {
// res.status(400).json(err);
// }

// });




  // try {
    // Get all recipes and JOIN with user data
    // const recipeData = await Recipe.findAll({

    // });

  //   // Serialize data so the template can read it
  //   const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

  //   // Pass serialized data and session flag into template
  //   res.return(
  //     recipes
  //   );
  // } catch (err) {
  //   res.status(500).json(err);
  // }




  router.get('/random', async (req, res) => {
    console.log("trying to access random");
    try {
      // Get all recipes and JOIN with user data
      const recipeData = await Recipe.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      // res.render('homepage', {
      //   recipes,
      //   logged_in: req.session.logged_in,
      // });
      // console.log("recipes is:" + recipes);
      console.log("length is:" + recipes.length);
      var random = Math.floor(Math.random() * recipes.length + 1);

      console.log("random is:" + random);
      res.status(200).json(random);
    } catch (err) {
      res.status(500).json(err);
    }
  });





module.exports = router;
