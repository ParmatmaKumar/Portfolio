import React from 'react'
import { FaLinkedin, FaSquareInstagram, FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6"

import studentImage from "../assets/boy1.png"
import About from '../pages/About'
import Sevices from "../pages/Sevices"
import Project from '../pages/Project'
import ReviewSliderPage from '../Common/ReviewSlider'
import Contact from './Contact'

const Home = () => {
    return (
        <>
            <div className='bg-linear-to-br from-[#070707] via-[#31153c] to-[#470864]'>

                <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-20'>

                    {/* LEFT SECTION */}
                    <div className='flex flex-col gap-6 w-full lg:w-[50%]'>

                        <p className='text-gray-200 text-lg md:text-2xl'>
                            WELCOME TO MY WORLD
                        </p>

                        <div className='flex gap-2 text-gray-200 items-baseline'>
                            <span className='text-4xl md:text-5xl font-bold'>Hi, I'm</span>
                            <span className='text-3xl md:text-4xl'>Siddharth</span>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 text-4xl md:text-6xl text-gray-200 font-semibold'>
                                <span className='text-purple-600 italic'>MERN</span>
                                Stack
                            </div>

                            <p className='text-sm md:text-lg text-purple-300 font-semibold mt-2'>
                                Passionate MERN Stack developer dedicated to building intuitive,
                                user-centered, and visually engaging digital experiences.
                                I transform ideas into seamless, functional web applications.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                            <button className='bg-white py-3 px-8 rounded-full text-lg font-semibold cursor-pointer'>
                                My Projects
                            </button>

                            <button className='py-3 px-8 rounded-full text-lg font-semibold border border-gray-200 text-white cursor-pointer'>
                                Download CV
                            </button>
                        </div>

                        {/* Social Icons */}
                        <div className='flex gap-6 mt-6 text-2xl md:text-3xl'>
                            <div className='bg-purple-100 rounded-full p-3 text-purple-500'><FaLinkedin /></div>
                            <div className='bg-purple-100 rounded-full p-3 text-purple-500'><FaSquareInstagram /></div>
                            <div className='bg-purple-100 rounded-full p-3 text-purple-500'><FaSquareXTwitter /></div>
                            <div className='bg-purple-100 rounded-full p-3 text-purple-500'><FaSquareFacebook /></div>
                        </div>

                    </div>

                    {/* RIGHT SECTION */}
                    <div className='flex justify-center w-full lg:w-[50%]'>
                        <img
                            src={studentImage}
                            alt="student"
                            className='w-62.5 md:w-[320px] lg:w-95'
                        />
                    </div>

                </div>
            </div>

            <About />
            <Sevices />
            <Project />
            <ReviewSliderPage />
            <Contact />
        </>
    )
}

export default Home