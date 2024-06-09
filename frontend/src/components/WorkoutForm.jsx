import React, { useState } from 'react';
import {
    Label,
    TextInput,
} from 'flowbite-react';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

function WorkoutForm() {
    const [title, setTitle] = useState("");
    const [reps, setReps] = useState("");
    const [load, setLoad] = useState("");
    const [error, setError] = useState("");
    const {workouts, dispatch} = useWorkoutContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, reps: Number(reps), load: Number(load) };

        const response = await fetch('http://localhost:4000/api/workouts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        });

        const result = await response.json()

        if (response.ok) {
            setTitle("");
            setLoad("");
            setReps("");
            dispatch({type:"CREATE_WORKOUT", payload:result})
        }

        else {
            setError(result.error)
        }
    };

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
            <div>
                <h2 className="font-bold text-2xl text-green-700 mb-4">Add New Workout</h2>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="title" value="Name" />
                </div>
                <TextInput
                    id="title"
                    type="text"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="reps" value="Reps" />
                </div>
                <TextInput
                    id="reps"
                    type="number"
                    value={reps}
                    required
                    onChange={(e) => setReps(e.target.value)}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="load" value="Load(kgs)" />
                </div>
                <TextInput
                    id="load"
                    type="number"
                    value={load}
                    required
                    onChange={(e) => setLoad(e.target.value)}
                />
            </div>
            <button type='submit' className='bg-green-500 p-2 font-sans text-white rounded w-4/5 mt-4'>Add Workout</button>
            {error && <div>
                {error}
                </div>}
        </form>
    );
}

export default WorkoutForm;
