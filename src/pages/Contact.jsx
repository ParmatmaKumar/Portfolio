import React from 'react'
import ContactForm from "../Common/ContactForm"
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { GiLemon } from "react-icons/gi";

const Contact = () => {
  return (
    <div className='bg-linear-to-br from-[#070707] via-[#31153c] to-[#470864]'>

      <div className='w-11/12 lg:w-10/12 mx-auto py-20'>

        <h1 className='text-3xl md:text-4xl text-gray-100 font-semibold'>
          Contact
        </h1>

        <div className='flex flex-col lg:flex-row gap-10 mt-10'>

          {/* LEFT SIDE */}
          <div className='flex flex-col items-center lg:items-start justify-center text-center lg:text-left text-2xl md:text-3xl text-gray-100 font-semibold w-full lg:w-1/2 gap-6'>

            <div className='flex items-center gap-4'>
              <GiLemon className='text-yellow-400'/>
              <p>Let's Create Something Amazing Together</p>
            </div>

            <MdOutlineInsertEmoticon className='text-4xl'/>

          </div>

          {/* RIGHT SIDE */}
          <div className='w-full lg:w-1/2'>
            <ContactForm />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact