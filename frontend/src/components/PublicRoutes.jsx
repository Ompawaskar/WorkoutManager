import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Navigate } from 'react-router-dom'

function PublicRoutes({children}) {
    const {user} = useAuthContext()

    if(user){
        return <Navigate to = '/' />
    }
    
    return children;
}

export default PublicRoutes
