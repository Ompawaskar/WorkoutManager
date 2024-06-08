const express = require('express');
require('dotenv').config()
const workoutRoutes = require('./routes/workoutRoutes')
const mongoose = require('mongoose');

// Express app
const app = express();

//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.method);
    console.log(req.path);
    next();
})

//routes
app.use('/api/workouts',workoutRoutes)

// Database Connection
mongoose.connect(process.env.MONGODBURI).
    then((response) => {
        console.log("Connected to DB");
        // Listen to Requests
        app.listen(process.env.PORT, () => {
        console.log("Listening on port 4000");
        })
    }).
    catch((err) => {
        console.log(err);
    })


