import React, { useContext } from 'react';
import { useState } from 'react';

const TaskCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    const handleCreate = async () => {
        onCreate(title);
        setTitle('');
    }

    return (
        <div className='task-create'>
            <div className='task-create-container' >
                <h3>Create a Task</h3>
                <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }} >
                    <div className='input-box' >
                        <input placeholder='  Type task' onChange={(e) => setTitle(e.target.value)} value={title} />
                        <button>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskCreate