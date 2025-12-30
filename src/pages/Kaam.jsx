import React from 'react'
import Project from '../components/Project'

const Kaam = () => {
  const projects = [
  {
    name: "card",
    link: "https://github.com/madhabAdhikary/cards"
  },
  {
    name: "Image slider",
    link: "https://github.com/madhabAdhikary/image-slider-react"
  },
  {
    name: "Courses-Grid",
    link: "https://github.com/madhabAdhikary/courses"
  }
];

  return (
    <div>
        <div className='h-screen w-full  flex flex-row justify-center align-middle mt-20  '>
      <div>
         <h1 className='text-4xl text-center mb-4'>
        Projects
      </h1>
      <div className='flex gap-5 flex-wrap'>
        {
          projects.map(function(ele,idx){
            return <Project index={idx} value={ele} />

          })
        }
          
      


      </div>
    
      </div>
      </div>
    </div>
  )
}

export default Kaam