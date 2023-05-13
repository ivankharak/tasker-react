import React from 'react';

const TaskCard = ({ task, deleteTaskById, slnum }) => {
    return (
        <div>
            <div className='book-show'>
                <b>{slnum}. </b>
                {task.title}
                <div className='actions'>
                    <button className='delete' onClick={() => deleteTaskById(task.id)}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard