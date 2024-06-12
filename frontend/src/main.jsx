import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements, Route , RouterProvider , Navigate} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import './index.css'
import { WorkoutContextProvider } from './context/Workout_Context'
import { AuthContextProvider } from './context/AuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoutes from './components/PublicRoutes'


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path = '/' element = { <Layout /> } >
      <Route path='' element = {<ProtectedRoute > <Home /> </ProtectedRoute>} />
      <Route path='login' element = {<PublicRoutes> <Login /> </PublicRoutes> } />
      <Route path='signup' element = {<PublicRoutes> <Signup /> </PublicRoutes>} />
    </Route>
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<AuthContextProvider>
  <WorkoutContextProvider >
    <RouterProvider router={router} />
  </WorkoutContextProvider>
</AuthContextProvider> 
</React.StrictMode>,
)
