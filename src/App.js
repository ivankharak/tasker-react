import React, { useContext } from "react";
import { useState, useEffect } from "react";
import TaskCreate from './components/TaskCreate'
import TaskList from "./components/TaskList";
import axios from "axios";
import TasksContext from "./contexts/tasks";

function App() {
  const { setTasks } = useContext(TasksContext);
  const { reloader } = useContext(TasksContext);

  useEffect(() => {
    (async () => {
      const existingData = await axios.get('http://localhost:3001/tasks');
      setTasks(existingData.data);
    })();
  }, [reloader])

  return (
    <div className="app">
      <div className="task-list" >
        <TaskList />
      </div>
      <h1 className="title">Niyoga v6</h1>
      <TaskCreate />
    </div>
  );
}

export default App;
