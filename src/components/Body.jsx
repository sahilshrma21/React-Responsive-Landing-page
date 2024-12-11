import React from 'react';
import { BsCheckCircleFill } from "react-icons/bs";
const Body = () => {
  return (
    <div className='space-y-4 lg:flex'>
      <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end lg:px-10'>
        <img src="https://www.freeiconspng.com/thumbs/spongebob-png/spongebob-new-version-png-13.png" alt="" />
      </div>
      <div className='space-y-4 md:space-y-7 lg:flex-1 lg:order-1 lg:px-10'>
        <h1 className='font-playfair font-bold text-5xl leading-tight md:text-6xl'>Host your websites in less then 5 minutes.</h1>
        <p className='font-lato text-gray-400 md:text-xl'>With Hosterr,get your websites up and running in no less then 5 minutes with the most competitive pakages available online. </p>
        <form action="" className='flex flex-col gap-4 md:flex-row '>
        <input type='email' placeholder='Enter email-Address' className='rounded-md px-4 py-3 placeholder:text-gray-400 md:text-xl'/>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white font-bold md:text-xl'>Join Waitlist</button>
        </form>
        <div className='flex items-center  gap-2'>
          <BsCheckCircleFill className='text-xl text-green-500'/>
          <p className='font-lato text-gray-400 md:text-xl'>No spam ever, Unsubscibe Anytime.</p>
        </div>
      </div>
    </div>
  )
}

export default Body
