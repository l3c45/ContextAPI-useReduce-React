import React from 'react'

function Filter({filter}) {


  return (
    <div className='filter'>
    <button onClick={()=>filter("SHOW_ALL")}>TODOS </button>
    <button onClick={()=>filter("COMPLETED")}>COMPLETADO </button>
    <button onClick={()=>filter("PENDING")}>INCOMPLETO </button>
    
    </div>
  )
}

export default Filter