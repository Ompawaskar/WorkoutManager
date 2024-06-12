import { useAuthContext } from "./useAuthContext"
import { useWorkoutContext } from "./useWorkoutContext"
export const useLogOut = () => {
const { dispatch } = useAuthContext()
const {dispatch: workoutsDispatch} = useWorkoutContext()
    
    const logout = () => {
        // Delete token 
        localStorage.removeItem('user')

        // Update Global State
        dispatch({type:"LOGOUT"})
        workoutsDispatch({type:"SET_WORKOUT" , payload: null})
    }

    return {logout}
}