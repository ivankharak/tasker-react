import React from 'react';

const TaskCard = ({ task, deleteTaskById, slnum }) => {
    return (
        <div>
            <div className='book-show'>
                <b>{slnum}. </b>
                {task.title}
                <button onClick={() => deleteTaskById(task.id)}>delete</button>
            </div>
        </div>
    )
}

export default TaskCard