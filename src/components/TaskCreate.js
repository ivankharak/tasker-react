import React from 'react';

const TaskCreate = ({ onCreate }) => {

    return (
        <div>
            <h3>Create a Task</h3>
            <label>Title</label>
            <br />
            <input placeholder="Type your task" />
        </div>
    )
}

export default TaskCreate