import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext';

function WorkoutCard({title,reps,load,id}) {
    const {workouts,dispatch} = useWorkoutContext()
    const deleteWorkout = async (e) => {
        console.log(id);
        const response = await fetch(`http://localhost:4000/api/workouts/${id}`,{
            method:"DELETE",  
        })

        if (response.ok) {
            console.log("Delete Wkout");
            dispatch({ type: "DELETE_WORKOUT", payload: { _id: id } });
        }

    }

    return (
        <div className='mt-2 bg-white border-2 rounded mx-4 px-4 py-2'>
            <div className='flex justify-between'>
            <h1 className='font-bold text-2xl font-sans py-2 text-green-500'>{title}</h1>
            <button className='w-4' onClick={deleteWorkout}>
                <img src="./delete.png" alt="" />
            </button>
            </div>
            <h3 className='font-semibold font-sans'>Reps:{reps}</h3>
            <h3 className='font-semibold font-sans'>Load(kg):{load}</h3>
        </div>
    )
}

export default WorkoutCard
