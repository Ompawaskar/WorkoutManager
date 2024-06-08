const Workout = require("../models/workoutModel")
const mongoose = require('mongoose')

// GET All workouts
const get_all_workouts = async (req,res) => {
    try {
        const workouts = await Workout.find().sort({createdAt:-1})
        res.status(200).json({all_workouts:workouts}) 
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// Get One Workout
const get_workout = async (req,res) => {
    const id = req.params.id;
    try {
        const workout = await Workout.findById(id);
        res.status(200).json({workout:workout})
    } catch (error) {
        res.status(400).json({error:error})
    }
}

// Create Workout
const create_workout = async (req,res) => {
    const {title,reps,load} = req.body;

    try {
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }   
}

// Delete a Workout
const delete_workout = async (req,res) => {
    try {
        const id = req.params.id;
        const workout = await Workout.findByIdAndDelete(id);
        res.status(200).json({workout:workout})
    } catch (error) {
        res.status(400).json({error:error})
    }
}

// Edit Workout
const update_workout = async (req,res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"No such Workout"})
    }

    const {title,reps,load} = req.body;
    try {
        const workout = await Workout.findByIdAndUpdate(id,{title,reps,load});
        res.status(200).json({updated_wkout:workout});
    } catch (error) {
        res.status(400).json({Error: error});
    }
}

module.exports = {get_all_workouts,get_workout,create_workout,delete_workout,update_workout}