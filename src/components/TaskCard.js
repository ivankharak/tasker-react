import React, { useState, useEffect, useContext } from 'react';
import TaskEdit from './TaskEdit'
import axios from 'axios';
import TasksContext from '../contexts/tasks';


const TaskCard = ({ task, slnum }) => {
    const { deleteTaskById, onEditTask, reloader } = useContext(TasksContext);
    const [active, setActive] = useState('');
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        (async () => {
            await task.status === true ? setActive('active') : setActive('');
        })();
    }, [task, reloader])

    const clickHandler = async () => {
        if (showEdit === false) {
            const res = await axios.put(`http://localhost:3001/tasks/${task.id}`, {
                title: task.title,
                status: active === '' ? true : false
            })
            res.data.status === false ? setActive('') : setActive('active');
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
                <div onClick={clickHandler} className='inline task-card-container ' >
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