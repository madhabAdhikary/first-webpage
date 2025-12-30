import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-16 m-3 rounded-full bg-[#27293b] text-white p-4 shadow-2xs flex  justify-between font-sans '>
      <h3 className='ml-7'>Madhab</h3>
      <div className='flex gap-8 pr-12'>
        <Link to='/'>Home</Link>
        <Link to='/Blogs'>Blogs</Link>
        <Link to='/Kaam'>Kaam</Link>
      </div>
    </div>
  )
}

export default Navbar