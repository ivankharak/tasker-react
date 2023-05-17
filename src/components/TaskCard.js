import React, { useState, useEffect } from 'react';
import TaskEdit from './TaskEdit'
import axios from 'axios';


const TaskCard = ({ task, deleteTaskById, slnum, onEditTask }) => {
    const [active, setActive] = useState('');
    // const [activeBoolean, setActiveBoolean] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        (async () => {
            task.status === true ? setActive('active') : setActive('');
            // task.status === true ? setActiveBoolean(true) : setActive(false);
        })();
    }, [])

    const clickHandler = async (task) => {
        if (showEdit === false) {
            const res = await axios.put(`http://localhost:3001/tasks/${task.id}`, {
                title: task.title,
                id: task.id,
                status: active === '' ? true : false
            })
            // console.log(res)
            // active === '' ? setActive('active') : setActive('');
            res.data.status === false ? setActive('') : setActive('active');
            // res.data.status === false ? setActiveBoolean(false) : setActiveBoolean(true);
        } else {
            // active === '' ? setActive('') : setActive('active');
        }
    }

    const handleTaskEditSubmit = async (id, newTitle) => {
        const res = await axios.put(`http://localhost:3001/tasks/${id}`, {
            id: id,
            title: newTitle + ' (edited)'
        })
        onEditTask(res.data);
        setShowEdit(false);
    }


    const renderTaskEdit = () => {
        if (showEdit === true) {
            return (
                <div>
                    <TaskEdit onTaskEditSubmit={handleTaskEditSubmit} task={task} onSetShowEdit={setShowEdit} />
                </div>
            )
        }
    }

    return (
        <div>
            <div className={`book-show ${active}`}>
                {/* <img alt='tasks' src={`https://picsum.photos/seed/${task.title}/300/200`} /> */}
                <div onClick={() => clickHandler(task)} className='inline task-card-container ' >
                    <b>{slnum}. </b>
                    <div className='task-card-results'>
                        {showEdit === false ? task.title : renderTaskEdit()}
                    </div>
                </div>
                <div className='actions'>
                    <button className='edit' onClick={() => setShowEdit(!showEdit)} >Edit</button>
                    <button className='delete' onClick={() => deleteTaskById(task.id)}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard