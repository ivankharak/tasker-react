import React from 'react';
import TaskCard from './TaskCard';
import useTasksContext from '../hooks/useTasksContext';

const TaskList = () => {
    const { tasks } = useTasksContext();
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

export default TaskList;