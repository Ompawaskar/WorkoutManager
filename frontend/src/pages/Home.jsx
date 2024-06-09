import React, { useEffect, useState } from 'react';
import WorkoutCard from '../components/WorkoutCard';
import WorkoutForm from '../components/WorkoutForm';
import {useWorkoutContext} from '../hooks/useWorkoutContext'

const Home = () => {
    const {workouts,dispatch} = useWorkoutContext();
    console.log(workouts);

    useEffect(() => {
        const fetch_workouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts');
            
            if (response.ok) {
                const data = await response.json();
                const { all_workouts } = data;
                dispatch({type:"SET_WORKOUTS", payload:all_workouts})
            }
        }

        fetch_workouts();
    }, [])

    return (
        <div className='flex  gap-8'>
            <div className='w-3/5 bg-white ml-8 mt-4'>
            {workouts && (
                <ul>
                    {workouts.map((workout) => (
                        <li key={workout._id}>
                            <WorkoutCard
                                title={workout.title}
                                reps={workout.reps}
                                load={workout.load}
                                id={workout._id}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
            <div className='w-2/5 bg-white mt-6 mx-8 flex justify-center'>
                <WorkoutForm />
            </div>
        </div>
    );
};

export default Home;
