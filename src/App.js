import "./App.css";
import TaskList from "./components/TaskList";
import GlobalState from "./store/GlobalState";
import NewTaskForm from "./components/newTaskForm";

function App() {
  return (
    <GlobalState>
      <div className="container">
        <TaskList></TaskList>
        <NewTaskForm></NewTaskForm>
      </div>
    </GlobalState>
  );
}

export default App;
