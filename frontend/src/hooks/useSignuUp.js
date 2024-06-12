import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useSignUp =() => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email,password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/signup',{
            method : "POST",
            headers:{
                "Content-Type":'application/json'},
            body: JSON.stringify({email,password})
        });

        const result = await response.json()

        if(!response.ok){
            setError(result.error)
            setIsLoading(false)
        }

        if(response.ok){
            
            //save user to LocalStorage
            localStorage.setItem('user',JSON.stringify(result))

            // update AuthContext
            dispatch({type: 'LOGIN' , payload : result})
            setIsLoading(false)
            
        }
    
    }
    
    return {signup,isLoading,error}
}