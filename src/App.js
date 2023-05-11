import React from "react";
import { useState, useEffect } from "react";
import TaskCreate from './components/TaskCreate'

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title) => {
    const updatedTasks = [
      ...tasks,
      { id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, title: title }
    ]
    setTasks(updatedTasks);
    if (title === "clear()") {
      setTasks([]);
    }
  }

  useEffect(() => {
    console.log(tasks)
  })

  const renderTask = tasks.map((task) => {
    return (
      <div key={task.id}>{task.id}. {task.title}</div>
    )
  })

  return (
    <div className="App">
      Tasker App
      <div>
        <br />
        {renderTask}
      </div>
      <TaskCreate onCreate={createTask} />
    </div>
  );
}

export default App;
