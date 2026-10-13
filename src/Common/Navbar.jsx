import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiLogoJava } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='bg-linear-to-br from-[#69186b] via-[#591176] to-[#3d0059]'>
      <div className='w-11/12 lg:w-10/12 mx-auto flex justify-between items-center p-3'>

        {/* Logo */}
        <div className='text-4xl md:text-5xl text-pink-100'>
          <BiLogoJava />
        </div>

        {/* Menu for md and lg */}
        <div className='hidden md:flex gap-6 lg:gap-8 text-lg lg:text-xl text-pink-100 font-semibold'>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/project">Project</Link>
          <Link to="/review">Review</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Button only for lg */}
        <div className='hidden lg:block bg-pink-400/70 px-6 py-2 rounded-3xl text-lg font-semibold text-pink-200'>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className='md:hidden text-3xl text-pink-100 cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='flex flex-col items-center gap-6 pb-6 md:hidden text-lg text-pink-100 font-semibold'>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/project">Project</Link>
          <Link to="/review">Review</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar