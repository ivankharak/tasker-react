import React, { useContext } from 'react';
import { useState } from 'react';
import TasksContext from '../contexts/tasks';

const TaskCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    const handleCreate = async () => {
        onCreate(title);
        setTitle('');
    }

    const { counter, incrementCounter } = useContext(TasksContext)

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
                <label>
                    {counter}
                </label>
                <button onClick={incrementCounter}>Increment</button>
            </div>
        </div>
    )
}

export default TaskCreate