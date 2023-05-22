import React, { createContext, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

const Provider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [reloader, setReloader] = useState(false);

    const createTask = async (title) => {
        const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

        if (title !== '' && title !== "alldone()" && title !== "alldel()" && title !== "allundone()" && title !== "allgreen()" && title !== "green()" && title !== "done()" && title !== "del()" && title !== "delete()" && title !== "undone()" && title !== "reset()") {
            const res = await axios.post('http://localhost:3001/tasks', {
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                title: capitalizedTitle,
                status: false,
            })

            const updatedTasks = [
                ...tasks,
                res.data
            ]
            setTasks(updatedTasks);
        }

        // --------------------------------------------------------------------------
        if (title === "alldel()" || title === "del()" || title === "delete()") {
            tasks.map(async (task) => {
                await axios.delete(`http://localhost:3001/tasks/${task.id}`)
            })
            setTasks([]);
        } else if (title === "alldone()" || title === "allgreen()" || title === "green()" || title === "done()") {
            (async () => {
                tasks.map(async (task, i) => {
                    await axios.put(`http://localhost:3001/tasks/${task.id}`, {
                        title: task.title,
                        status: true
                    });
                    setReloader(!reloader);
                });
            })();
        } else if (title === "allundone()" || title === "undone()" || title === "reset()") {
            (async () => {
                tasks.map(async (task, i) => {
                    await axios.put(`http://localhost:3001/tasks/${task.id}`, {
                        title: task.title,
                        status: false
                    });
                    setReloader(!reloader);
                });
            })();
        }
        // --------------------------------------------------------------------------

    }

    const deleteTaskById = async (id) => {
        await axios.delete(`http://localhost:3001/tasks/${id}`);

        const delUpdatedTasks = [
            ...tasks.filter((task) => {
                return task.id !== id;
            })
        ];

        setTasks(delUpdatedTasks);
    }

    const handleEditTask = async (newTask) => {
        const editUpdatedTasks = [
            ...tasks.slice(0, newTask.id - 1),
            newTask,
            ...tasks.slice(newTask.id)
        ]
        setTasks(editUpdatedTasks);
    }



    // ----------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------



    const snc = {
        tasks,
        setTasks,
        reloader,
        setReloader,
        createTask,
        deleteTaskById,
        handleEditTask,
    }



    return (
        <TasksContext.Provider value={snc}>
            {children}
        </TasksContext.Provider>
    )
}

export { Provider };
export default TasksContext;