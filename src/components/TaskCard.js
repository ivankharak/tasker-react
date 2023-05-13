import React from 'react';

const TaskCard = ({ task }) => {
    return (
        <div>
            <div key={task.id}>{task.id}. {task.title}</div>
        </div>
    )
}

export default TaskCard