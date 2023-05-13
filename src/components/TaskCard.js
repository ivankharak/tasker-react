import React from 'react';

const TaskCard = ({ task }) => {
    return (
        <div>
            <div className='book-show' key={task.id}>{task.id}. {task.title}</div>
        </div>
    )
}

export default TaskCard