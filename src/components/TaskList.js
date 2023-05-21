import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import TasksContext from '../contexts/tasks';

const TaskList = () => {
    const { tasks } = useContext(TasksContext);
    const renderTask = tasks.map((task, index) => {
        return (
            <TaskCard key={task.id} task={task} slnum={index + 1} />
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