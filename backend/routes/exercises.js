const router = require('express').Router(); //express router, we are creating route
let Exercise = require('../models/exercise.model'); //requiring mongoose model

//first route/enpoint, handing incoming get request
router.route('/').get((req, res) => { // GET localhost:5000/exercise/
  Exercise.find() // 'find()' is a mongoose method that is going to find all the exercises from mongodb database
    .then(exercises => res.json(exercises)) // returning exercises in JSON format
    .catch(err => res.status(400).json('Error: ' + err));
});

//second route/enpoint, handing incoming post request
router.route('/add').post((req, res) => {
  const username = req.body.username; 
  const description = req.body.description; 
  const duration = Number(req.body.duration); //converting to number
  const date = Date.parse(req.body.date); //converting to date

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  }); //creating new instance of an exercise with the variables

  newExercise.save() // 'save()' method saving to the database
    .then(() => res.json('Exercise added!')) //after saved in mongodb database, returning exercise added message
    .catch(err => res.status(400).json('Error: ' + err)); // or error message
});

module.exports = router;