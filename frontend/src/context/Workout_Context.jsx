import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutReducer = (state,action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return {
                workouts: action.payload
            }
            break;
        case "CREATE_WORKOUT":
            return {
                workouts:[action.payload,...state.workouts]
            }
            break;
        case "DELETE_WORKOUT":
            return {
                workouts:state.workouts.filter((workout) => workout._id !== action.payload._id )
            }
            break;
    
        default:
            return state
            break;
    }
}

export const WorkoutContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(workoutReducer,{
       workouts: null 
    })

    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutContext.Provider>
    )
}