import React from 'react'

const Footer = () => {
  return (
    <div className='h-[300px] bg-[#e9eb77] flex items-center justify-between px-10 text-[#444]'>
      <div className='flex flex-col'>
      <img src="/logo.png" alt="" height="200px" width="200px"/>
      <span className='w-[70%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta vitae facilis deleniti dicta? Sequi eos ab officia libero, cupiditate dolore quasi.</span>
      <span>+91-8768686786</span>
      <span>anantkumar@gmail.com</span>
      </div>

      <div className='flex flex-col '>
        <span> &copy; copyright 2024</span>
      </div>
    </div>
  )
}

export default Footer