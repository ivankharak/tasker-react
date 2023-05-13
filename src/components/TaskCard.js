import React from 'react';

const TaskCard = ({ task, deleteTaskById }) => {
    return (
        <div>
            <div className='book-show' key={task.id}>
                {task.id}. {task.title}
                <button onClick={() => deleteTaskById(task.id)}>delete</button>
            </div>
        </div>
    )
}

export default TaskCard