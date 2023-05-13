import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => {
    const renderTask = tasks.map((task) => {
        return (
            // <div key={task.id}>{task.id}. {task.title}</div>
            <TaskCard key={task.id} task={task} />
        )
    })
    return (
        <div>
            <h2 className='subtitle' >TaskList</h2>
            {renderTask}
        </div>
    )
}

export default TaskList