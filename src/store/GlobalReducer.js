import { SAVE_TASK, REMOVE_TASK, COMPLETE_TASK,VISIBILITY } from "./types";

/*eslint-disable */
export default (state, action) => {
  const { payload, type } = action;


  switch (type) {
    case SAVE_TASK:
      return {
        tasks: state.tasks.slice().concat({ ...payload }),
        filter:state.filter
      };
    case REMOVE_TASK:
      return {
        tasks: state.tasks.filter((task) => task.id !== payload.id),
        filter:state.filter
      };
    case COMPLETE_TASK:
      return {
        tasks: state.tasks.map((task) =>
          task.id === payload.id
            ? { ...task, completed: !task.completed }
            : task
           
        ),
        filter:state.filter
      };
      case VISIBILITY:
      return {
        tasks:state.tasks,
        filter:payload.filter
  
      };

    default:
      return state;
  }
};
