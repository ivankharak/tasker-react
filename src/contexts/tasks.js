import React, { createContext, useState } from "react";

const TasksContext = createContext();

const Provider = ({ children }) => {
    const [counter, setCounter] = useState(5);

    const valueToShare = {
        counter,
        incrementCounter: () => {
            setCounter(counter + 1);
        }
    }

    return (
        <TasksContext.Provider value={valueToShare}>
            {children}
        </TasksContext.Provider>
    )
}

export { Provider };
export default TasksContext;