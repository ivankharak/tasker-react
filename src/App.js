import React from "react";
import { useState } from "react";
import TaskCreate from './components/TaskCreate'

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => {
    console.log(title);
  }
  return (
    <div className="App">
      Tasker App
      <TaskCreate onCreate={createTask} />
    </div>
  );
}

export default App;
