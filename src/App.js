import React from "react";
import { useState } from "react";
import TaskCreate from './components/TaskCreate'
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  (async () => {
    const existingData = await axios.get('http://localhost:3001/tasks');
    setTasks(existingData.data);
  })();

  const createTask = async (title) => {
    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    if (title !== '') {
      const res = await axios.post('http://localhost:3001/tasks', {
        title: capitalizedTitle
      })

      // The code below takes a object from the json server post request responce and creates an array of objects and also updates the state.
      const updatedTasks = [
        ...tasks,
        res.data
      ]
      setTasks(updatedTasks);
    }

    // Custom Methods
    // --------------------------------------------------------------------------
    if (title === "alldone()" || title === "alldel()") {
      setTasks([]);
    }
    // --------------------------------------------------------------------------

  }

  const deleteTaskById = (id) => {
    const delUpdatedTasks = [
      ...tasks.filter((task) => {
        return task.id !== id;
      })
    ];

    setTasks(delUpdatedTasks);
  }

  const handleEditTask = (id, newtitle) => {
    const editUpdatedTasks = [
      ...tasks.slice(0, id - 1),
      { id: id, title: newtitle },
      ...tasks.slice(id)
    ]

    setTasks(editUpdatedTasks);
  }

  return (
    <div className="app">
      <div className="task-list" >
        <TaskList tasks={tasks} onEditTask={handleEditTask} deleteTaskById={deleteTaskById} />
      </div>
      <h1 className="title">Niyoga</h1>
      <TaskCreate onCreate={createTask} />
    </div>
  );
}

export default App;
