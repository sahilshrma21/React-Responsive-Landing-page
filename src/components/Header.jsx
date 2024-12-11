import React from 'react';
import { BsFillRocketFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className='flex justify-between py-3'>
      <div className='flex items-center justify-center gap-5'>
      <BsFillRocketFill className='text-xl lg:text-2xl'/>
        <button className='font-bold bg-gradient-to-r from-orange-500 to-red-400 rounded-3xl px-5 py-1 text-xs text-white lg:text-sm' >Hosterr is Hiring!</button>
      </div>
      <ul className='hidden lg:flex justify-between font-lato items-center text-gray-400 gap-6 text-sm'>
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hosterr</a></li>
      </ul>
      <div className='hidden lg:flex justify-between font-lato items-center gap-6 text-sm'>
        <a href="#" className='text-gray-400'>Sign In</a>
        <button className='rounded-lg px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white font-bold md:text-sm'>Join Waitlist</button>
      </div>
      <div className='lg:hidden'>
      <FaBars className='text-xl' />
      </div>
    </div>
  )
}

export default Header
