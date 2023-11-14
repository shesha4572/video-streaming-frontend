import React from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../../assets/landing.png';

export default function Welcome() {
    return (
        <div className="relative h-screen w-full bg-red-100 md:bg-red-400">
            {/* Welcome Section */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-800">
                <form className="max-w-[400px] w-full mx-auto bg-gray-200 p-8 px-8 rounded-lg">
                    <h1 className="text-4xl font-bold mb-4">WELCOME</h1>
                    <Link to="/login" className="text-gray-600 py-2 block border-b border-gray-300 hover:text-pink-800 hover:border-pink-800 transition duration-300">
                        Login
                    </Link>
                    <Link to="/signup" className="text-gray-600 py-2 block border-b border-gray-300 hover:text-pink-800 hover:border-pink-800 transition duration-300">
                        Don't have an account? Sign Up
                    </Link>
                </form>
            </div>

            <img className="w-full h-full object-cover" src={landingImg} alt="Welcome Background" />
        </div>
    );
}
