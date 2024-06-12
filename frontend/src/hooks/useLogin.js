import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext();

    const login = async (email,password) => {
        setIsLoading(true);
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/login',{
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
            //Update Local Storage
            localStorage.setItem('user',JSON.stringify(result))

            //Update Global Auth
            dispatch({type:"LOGIN",payload:result})

            setIsLoading(false)
        }

    }

    return {login,error,isLoading}

}