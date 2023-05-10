import React from 'react';
import { useState } from 'react';

const TaskCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    const handleCreate = () => {
        onCreate(title);
    }

    return (
        <div>
            <h3>Create a Task</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }} >
                <label>Title</label>
                <br />
                <input onChange={(e) => setTitle(e.target.value)} value={title} />
            </form>
            <br />
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}

export default TaskCreate