import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import GlobalReducer from "./GlobalReducer";
import { SAVE_TASK, REMOVE_TASK,COMPLETE_TASK ,VISIBILITY} from "./types";

let index = 1;

const GlobalState = (props) => {
  const initialState = {
    tasks: [{ id: 0, text: "Esto es una tarea", completed: false }],
    filter:"SHOW_ALL"
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const saveTask = (task) => {
    dispatch({
      type: SAVE_TASK,
      payload: {
        id: index++,
        text: task,
        completed: false,
      },
    });
  };

  const removeTask = (id) => {

    dispatch({
      type: REMOVE_TASK,
      payload: {
        id: id,
      },
    });
  };
  const complete = (id) => {

    dispatch({
      type: COMPLETE_TASK,
      payload: {
        id: id,
      },
    });
  };

  const changeFilter = (type) => {

    dispatch({
      type:VISIBILITY,
      payload: {
        filter:type
      },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        saveTask,
        removeTask,
        complete,
        changeFilter,
        filter:state.filter
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
