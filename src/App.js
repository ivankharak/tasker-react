import React from "react";
import { useState } from "react";
import TaskCreate from './components/TaskCreate'
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title) => {
    if (title !== '') {
      const updatedTasks = [
        ...tasks,
        { id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, title: title }
      ]
      setTasks(updatedTasks);
    }
    if (title === "alldone()") {
      setTasks([]);
    }
  }

  const renderTask = tasks.map((task) => {
    return (
      <div key={task.id}>{task.id}. {task.title}</div>
    )
  })

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
