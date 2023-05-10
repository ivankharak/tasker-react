import React from 'react';
import { useState } from 'react';

const TaskCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    const handleCreate = async () => {
        onCreate(await title);
        setTitle('');
    }

    return (
        <div>
            <h3>Create a Task</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }} >
                <label>Title</label>
                <br />
                <input onChange={(e) => setTitle(e.target.value)} value={title} />
                <button>Create</button>
            </form>
        </div>
    )
}

export default TaskCreate