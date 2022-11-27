import React from "react";
import { useContext ,useRef} from "react";
import GlobalContext from "../store/GlobalContext";

function NewTaskForm() {
  const {saveTask}=useContext(GlobalContext)
  const input=useRef("")

  const submit=(e)=>{
    e.preventDefault()
   
      saveTask(input.current.value)
      input.current.value=""
    
  }


  return (
    <div>
      <form onSubmit={(e)=>submit(e)}>
        <input
          type="text"
          placeholder="Task"
          ref={input}
        />
        <button type='submit'>Guardar</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
