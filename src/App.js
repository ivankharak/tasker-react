import React from "react";
import { useState } from "react";
import TaskCreate from './components/TaskCreate'

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title) => {
    setTasks(await title);
  }
  return (
    <div className="App">
      {console.log(tasks)}
      Tasker App
      <TaskCreate onCreate={createTask} />
    </div>
  );
}

export default App;
