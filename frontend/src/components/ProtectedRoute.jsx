import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Navigate, useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const { user } = useAuthContext();

    if(!user){
        return <Navigate to='/login' />
    }
   
    return children;
}

export default ProtectedRoute
