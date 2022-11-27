import React from "react";
import Task from "./pure/Task";
import { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import Filter from "./pure/Filter";

function TaskList() {
  const { tasks, removeTask, complete, filter, changeFilter } =
    useContext(GlobalContext);

  return (
    <div className="taskList">
      <ul>
        {tasks
          .filter(
            (item) =>
              item.completed !==
              (filter === "COMPLETED"
                ? false
                : filter === "PENDING"
                ? true
                : null)
          )
          .map((task, index) => (
            <Task
              {...task}
              complete={complete}
              removeTask={removeTask}
              key={index}
            ></Task>
          ))}
      </ul>
      <Filter filter={changeFilter}></Filter>
    </div>
  );
}

export default TaskList;
