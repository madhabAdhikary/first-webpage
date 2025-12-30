import React from 'react'
import { Instagram,Twitter,Facebook } from 'lucide-react';

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-6 -translate-y-11   '>
      <div className='-translate-y-11'>
        <h1  className=' text-center text-5xl  mb-5 leading-snug'> Hello I'm Madhab</h1>
        <h2 className='text-center text-4xl'>A self taught Developer based in Nepal</h2>

      </div>
      <div className='flex gap-4 m-4 -translate-y-11'>
        <button><Instagram /></button>
        <button><Twitter /></button>
        <button><Facebook /></button>
      </div>
      <div className='-translate-y-11'>
        <h2 className=' text-center  text-4xl '>skills</h2>
        <h2 className='text-center text-2xl mt-3'>Tool i use for web and discord development</h2>
      </div>

      
    </div>
  )
}

export default Home
