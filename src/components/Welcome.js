import React from 'react'
import loginImg from '../assets/landing.png'
import { Link } from 'react-router-dom'

export default function Welcome() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <h1 className='text-4x1 dark:text-white font bold text-center' >WELCOME</h1>
                    <br />
                    <Link to="/login"className='flex flex-col text-gray-400 py-2 text-center'>Login</Link>
                    <br />
                    <Link to="/signup"className='flex flex-col text-gray-400 py-2 text-center'>Don't have an account? Sign Up</Link>
                </form>
            </div>
        </div>
    )
}