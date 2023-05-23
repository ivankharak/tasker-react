import { useContext } from "react";
import TasksContext from "../contexts/tasks";

const useTasksContext = () => {
    return useContext(TasksContext);
}

export default useTasksContext;