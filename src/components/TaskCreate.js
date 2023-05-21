import React, { useContext, useState } from 'react';
import TasksContext from '../contexts/tasks';

const TaskCreate = () => {
    const { createTask } = useContext(TasksContext);
    const [title, setTitle] = useState('');

    const handleCreate = async () => {
        createTask(title);
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