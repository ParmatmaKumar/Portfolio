import React from 'react'
import { useForm } from 'react-hook-form';


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (

        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className=''>
                <div className=''>
                    <p className='text-pink-100 text-xl '>Name</p>
                    <input type="text" placeholder='Enter Your Name' className='outline-none mt-2 border-2 border-gray-400 p-2 rounded-md text-pink-100 w-full' />
                </div>

                <div className='mt-2'>
                    <p className='text-pink-100 text-xl'>Email</p>
                    <input type="email" placeholder='Enter Your Email' className='outline-none mt-2 p-2 rounded-md border-2 border-gray-400 text-pink-100 w-full' />
                </div>

                <div className='mt-2'>
                    <p className='text-pink-100 text-xl'>Message</p>
                    <textarea name="Message" rows={5} cols={30} placeholder='Enter Message' className='outline-none mt-2 border-2 border-gray-400 p-2 rounded-md text-pink-100 w-full' ></textarea>
                </div>

                <button type='submit' className='bg-[#F43AB0] p-2 rounded-md mt-5 font-semibold cursor-pointer text-gray-200'>Send Message</button>
            </div>
        </form>

    )
}

export default ContactForm