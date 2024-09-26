import React from 'react'

function NavbarH() {
  return (
    <nav className='bg-black text-white px-1 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <p className='text-2xl font-bold hidden md:inline'>Libin</p>
        <div className='space-x-6'>
          <a href='#about' className='hover:text-gray-400'>About me</a>
          <a href='#services' className='hover:text-gray-400'>Services</a>
          <a href='#Project' className='hover:text-gray-400'>Project</a>
          <a href='#Contact' className='hover:text-gray-400'>Contact</a>
        </div>
        <button onClick={() => window.location = 'mailto:libinprofile@gmail.com'}  className='bg-gradient-to-r from-violet-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact me</button>
      </div>
    </nav>
  )
}

export default NavbarH