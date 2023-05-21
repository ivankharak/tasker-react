import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import TasksContext from '../contexts/tasks';

const TaskList = () => {
    const { tasks, deleteTaskById, onEditTask, reloader } = useContext(TasksContext);
    const renderTask = tasks.map((task, index) => {
        return (
            <TaskCard key={task.id} task={task} reloader={reloader} slnum={index + 1} deleteTaskById={deleteTaskById} onEditTask={onEditTask} />
        )
    })
    return (
        <div>
            <div className='book-list' >
                {renderTask}
            </div>
        </div>
    )
}

export default TaskList