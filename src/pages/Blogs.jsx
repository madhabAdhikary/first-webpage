import React from 'react'

const Blogs = () => {
  return (
    <div className='h-screen w-full  flex justify-center align-middle mt-20  '>
      <div>
         <h1 className='text-4xl'>
        Blog
      </h1>
      <input className='bg-gray-500 rounded-2xl shadow-2xs mt-4 p-3 w-121 capitalize' type="text" placeholder='search post' />

      </div>
     

    </div>
  )
}

export default Blogs
