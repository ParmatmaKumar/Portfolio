import React from 'react'
import { IoSparklesSharp } from "react-icons/io5"
import { FaJsSquare, FaReact, FaNodeJs, FaJava } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import boyImage from "../assets/boy22.png"

const About = () => {
  return (
    <div className='bg-linear-to-br from-[#1c0936] via-[#31153c] to-[#070707]'>

      <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center gap-12 py-20'>

        {/* LEFT IMAGE */}
        <div className='flex justify-center w-full lg:w-[40%]'>
          <img
            src={boyImage}
            alt="about"
            className='w-62.5 md:w-[320px] lg:w-95'
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className='flex flex-col gap-4 w-full lg:w-[60%]'>

          <h1 className='text-3xl md:text-4xl font-bold text-gray-200'>
            About Me
          </h1>

          <div className='flex flex-col gap-4 text-purple-300 font-semibold text-sm md:text-lg'>

            <p>
              Welcome to my portfolio! I'm a passionate MERN stack developer
              dedicated to creating seamless and visually engaging digital
              experiences.
            </p>

            <p>
              My skills include building full-stack web applications using
              modern technologies like React, Node.js, and MongoDB while
              focusing on performance and user experience.
            </p>

            <div className='flex gap-2 items-start'>
              <span className='mt-1 text-lg'><IoSparklesSharp /></span>
              <p>
                I am deeply committed to my work, investing creativity and
                precision into every project to ensure a unique and effective
                user experience.
              </p>
            </div>

            {/* SKILLS */}
            <div className='mt-6'>
              <h2 className='text-white text-2xl md:text-3xl font-bold'>
                Skills
              </h2>

              <div className='flex gap-6 mt-5 text-3xl md:text-5xl text-purple-400'>
                <FaJsSquare />
                <FaReact />
                <FaNodeJs />
                <SiMongodb />
                <FaJava />
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default About