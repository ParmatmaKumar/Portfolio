import React from 'react'
import ProjectCard from '../Card/ProjectCard'

const Project = () => {
  return (
    <div className="py-10 px bg-linear-to-br from-[#c213e9] via-[#31153c] to-[#40035d]">
        <div className='w-10/12 mx-auto'>
          <div className='flex flex-col items-center gap-5'>
            <h1 className='text-4xl text-pink-200 font-bold'>My Projects</h1>
            <p className='text-pink-200 font-semibold'>Discover the projects that showcase my passion for design and innovation</p>
            <div className='mt-10'>
                <ProjectCard/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Project