const router = require('express').Router(); //express router, we are creating route
let User = require('../models/user.model'); //requiring mongoose model

//first route/enpoint, handing incoming get request
router.route('/').get((req, res) => { // GET localhost:5000/users/
  User.find() // 'find()' is a mongoose method that is going to find all the users from mongodb database
    .then(users => res.json(users)) // returning users in JSON format
    .catch(err => res.status(400).json('Error: ' + err));
});

//second route/enpoint, handing incoming post request
router.route('/add').post((req, res) => {
  const username = req.body.username; //new username is part of a request body - so we need to extract it

  const newUser = new User({username}); //creating new instance of user

  newUser.save() // 'save()' method saving to the database
    .then(() => res.json('User added!')) //after saved in mongodb database, returning user added message
    .catch(err => res.status(400).json('Error: ' + err)); // or error message
});

module.exports = router;