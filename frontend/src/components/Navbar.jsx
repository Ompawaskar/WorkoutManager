import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLogOut } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
    const {logout} = useLogOut()
    const {user} = useAuthContext()

    const handleLogout = () => {
        logout()
    }

    return (
        <header className="shadow  z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <h1 className='text-2xl font-bold font-sans'>Workout Buddy</h1>
                    </Link>
                    <div className="flex items-center lg:order-2">
                    {user && (<div className='flex gap-4'><h1>
                            {user.email}
                        </h1>
                        <button
                            onClick={handleLogout}
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            LogOut
                            </button>
                        </div>
                    )}
                    {!user && (
                    <div>
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                        </div>)}
                        
                        
                        
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar
