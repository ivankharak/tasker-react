import React from 'react';
import { useState } from 'react';

const TaskCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    return (
        <div>
            <h3>Create a Task</h3>
            <label>Title</label>
            <br />
            <input onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
    )
}

export default TaskCreate