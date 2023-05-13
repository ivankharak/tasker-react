import React from "react";
import { useState } from "react";
import TaskCreate from './components/TaskCreate'
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title) => {

    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    if (title !== '') {
      const updatedTasks = [
        ...tasks,
        { id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, title: capitalizedTitle }
      ]
      setTasks(updatedTasks);
    }
    if (title === "alldone()" || title === "alldel()") {
      setTasks([]);
    }
  }

  const deleteTaskById = (id) => {
    const delUpdatedTasks = [
      ...tasks.filter((task) => {
        return task.id !== id;
      })
    ];

    setTasks(delUpdatedTasks);
  }

  return (
    <div className="app">
      <h1 className="title" >Tasker App</h1>
      <TaskList tasks={tasks} deleteTaskById={deleteTaskById} />
      <TaskCreate onCreate={createTask} />
    </div>
  );
}

export default App;
