import React from 'react';

const TaskList = ({ tasks }) => {
    const renderTask = tasks.map((task) => {
        return (
            <div key={task.id}>{task.id}. {task.title}</div>
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