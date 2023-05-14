import React, { useState } from 'react';
import TaskEdit from './TaskEdit'


const TaskCard = ({ task, deleteTaskById, slnum }) => {
    const [active, setActive] = useState('');
    const [showEdit, setShowEdit] = useState(false);

    const clickHandler = () => {
        active === '' ? setActive('active') : setActive('');
    }

    const renderTaskEdit = () => {
        if (showEdit === true) {
            return (
                <div>
                    <TaskEdit />
                </div>
            )
        }
    }

    return (
        <div>
            <div onClick={clickHandler} className={`book-show ${active}`}>
                <b>{slnum}. </b>
                {task.title}
                <div className='actions'>
                    <button className='edit' onClick={() => setShowEdit(!showEdit)} >Edit</button>
                    <button className='delete' onClick={() => deleteTaskById(task.id)}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard