

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

const randomRecipe =  () => {
  // const { Recipe } = require('../models');
  // let recipeArray = try {
  //   // Get all recipes and JOIN with user data
  //   var recipeData = await Recipe.findAll({
  //   }); 
  //   console.log(recipeData);
  //   var recipeCount = recipeData.recipes.length;

  // } catch (err) {
  //   res.status(500).json(err);
  // }



  console.log("button clicked");
  // document.location.replace('/recipe/1');



//   const response = await fetch('/recipe', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   })
//   .then(response => response.json())
//   .then(recipes => {
//     const recipeIDs = recipes.map(recipe => recipe.id);
//     const randomID = recipeIDs[Math.floor(Math.random() * recipeIDs.length)];
//   });
//   console.log(randomID);

// }

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'Password',
//   database : 'db_recipes'
// });
// connection.connect();

// // var userdata = '24';

// var sql = 'SELECT COUNT(*) FROM recipe'
// connection.query(sql, [id], function(err, rows, fields) {
//   if (err) throw err;
//   console.log('Query result: ', rows);
// });

// connection.end();


// const response = await Recipe.findAll({
//   attributes: {
//     include: [
//       [sequelize.fn('COUNT', sequelize.col('id')), 'n_ids']
//     ]
//   }
// })

// .then(console.log(n_ids));

// if (response.ok) {
//   // document.location.replace('/login');
//   console.log(response);
// } else {
//   alert(response.statusText);
// }
// };



// const response = await 
// fetch('/api/users/random', {
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
// });
var randomID;

fetch('/api/users/random', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
.then(response => response.json())
.then(data => {console.log(data),
document.location.replace('/recipe/'+ data)});
// .then(data => {randomID = data})
// .then(console.log("randomID is: "+ randomID));

// if (response.ok) {
//   // console.log("the response is:" + response.json().then());

//   ((response) => response.json())
//   .then((data) => {console.log(data);});



  // document.location.replace('/recipe/'+ data);
// } else {
//   alert(response.statusText);
// }
// };
}

document.querySelector('#random').addEventListener('click', randomRecipe);

document.querySelector('#logout').addEventListener('click', logout);
