import React from 'react'

const Project = (props) => {
    console.log(props.value.link)
  return (
    <div onClick={function(){
       window.open(props.value.link);
        console.log("clicking")
    }} className='w-105 h-35 bg-gray-400 shadow-cyan-950 rounded-3xl mt-4 p-4'>
        <h1 className='text-2xl'>{props.value.name}</h1>
            <h3>perosnal project showcasting my skills</h3>

    </div>
  )
}

export default Project