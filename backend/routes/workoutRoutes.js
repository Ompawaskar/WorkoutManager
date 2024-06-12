const express = require('express');
const {get_all_workouts,get_workout,create_workout,delete_workout,update_workout} = require("../controllers/workoutController")
const requireAuth = require('../middleware/requireAuth')
// Getting an instance of Router
const router = express.Router();

router.use(requireAuth);

// All workouts
router.get('/',get_all_workouts)

//Single Workout
router.get('/:id', get_workout)

// Post Single Workout
router.post('/', create_workout)

// Delete Single Workout
router.delete('/:id', delete_workout)

// Update Single Workout
router.patch('/:id', update_workout)

module.exports = router

