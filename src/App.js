import React from "react";
import { useState, useEffect } from "react";
import TaskCreate from './components/TaskCreate'

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title) => {
    setTasks(title);
  }

  useEffect(() => {
    console.log(tasks)
  })

  return (
    <div className="App">
      Tasker App
      <TaskCreate onCreate={createTask} />
    </div>
  );
}

export default App;
