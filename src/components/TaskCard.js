import React, { useState } from 'react';
import TaskEdit from './TaskEdit'


const TaskCard = ({ task, deleteTaskById, slnum, onEditTask }) => {
    const [active, setActive] = useState('');
    const [showEdit, setShowEdit] = useState(false);

    const clickHandler = () => {
        active === '' ? setActive('active') : setActive('');
    }

    const renderTaskEdit = () => {
        if (showEdit === true) {
            return (
                <div>
                    <TaskEdit onEditTask={onEditTask} task={task} onSetShowEdit={setShowEdit} />
                </div>
            )
        }
    }

    return (
        <div>
            <div className={`book-show ${active}`}>
                <div onClick={clickHandler} >
                    <b>{slnum}. </b>
                    {task.title}
                </div>
                {renderTaskEdit()}
                <div className='actions'>
                    <button className='edit' onClick={() => setShowEdit(!showEdit)} >Edit</button>
                    <button className='delete' onClick={() => deleteTaskById(task.id)}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard