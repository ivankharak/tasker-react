import React from "react";
import { useEffect } from "react";
import TaskCreate from './components/TaskCreate'
import TaskList from "./components/TaskList";
import axios from "axios";
import useTasksContext from "./hooks/useTasksContext";

function App() {
  const { setTasks } = useTasksContext();
  const { reloader } = useTasksContext();

  useEffect(() => {
    (async () => {
      const existingData = await axios.get('http://localhost:3001/tasks');
      setTasks(existingData.data);
    })();
  }, [reloader]);

  return (
    <div className="app">
      <div className="task-list" >
        <TaskList />
      </div>
      <h1 className="title">Niyoga v7</h1>
      <TaskCreate />
    </div>
  );
}

export default App;
