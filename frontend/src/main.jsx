import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import './index.css'
import { WorkoutContextProvider } from './context/Workout_Context'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path = '/' element = { <Layout /> } >
      <Route path='' element = { <Home /> } />
    </Route>
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <WorkoutContextProvider >
    <RouterProvider router={router} />
  </WorkoutContextProvider> 
</React.StrictMode>,
)
