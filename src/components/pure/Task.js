import React from 'react'

function Task({text,id,completed,removeTask,complete}) {
  return (
    <li
    className='task'
    style={
        {
         color:completed? "green":"white"
        }
    }>
    {id}-<span onClick={()=>complete(id)}>{text}</span>  -<span onClick={()=>removeTask(id)} style={{color:"red",fontSize:"25px"}}>Delete</span>

    </li>
  )
}

export default Task