import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "/src/index.css"

const Navbar = () => {
  const [Drop, setDrop] = useState('none')
  return (
    <div className='w-full h-16 m-3 rounded-full bg-[#27293b] text-white p-4 shadow-2xs flex  justify-between font-sans  '>
      <h3 className='ml-7'>Madhab</h3>
      <div className='flex gap-8 pr-12'>
        <Link to='/'>Home</Link>
        <Link to='/Blogs'>Blogs</Link>
        <div id="grp flex flex-col">
             <Link  id='kaam' to='/Kaam'>Kaam
           </Link>
           <div id="container" className='absolute w-40 h-20 bg-red-500 mt-6 right-11 flex flex-col items-center   '>
          <Link to=''>Ludo</Link>
          <Link to=''>calculator</Link>
          <Link to=''>webpage</Link>
        </div>

        </div>
     
       
      </div>
    </div>
  )
}

export default Navbar