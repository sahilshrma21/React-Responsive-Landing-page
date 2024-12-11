import React from 'react'
const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex items-center justify-center gap-10 font-lato text-gray-400 md:text-xl'>
        <li>
          <a href='#'>Facebook</a>
        </li>
        <li>
          <a href='#'>Instagram</a>
        </li>
        <li>
          <a href='#'>Twitter</a>
        </li>
      </ul>
      <div className='flex items-center gap-3 md:gap-5'>
        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="pic" className='h-16 w-16  rounded-full'/>
        <div>
          <p className=' font-playfair font-thin'>Have any questions?</p>
          <a href="#" className='font-lato font-medium '>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
