import { WorkoutContext } from "../context/Workout_Context";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext);

    if(!context){
        throw Error("Use Workout Context must be inside context Provider");
    }

    return context;
}