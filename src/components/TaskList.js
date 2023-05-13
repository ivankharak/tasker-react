import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, deleteTaskById }) => {
    const renderTask = tasks.map((task) => {
        return (
            // <div key={task.id}>{task.id}. {task.title}</div>
            <TaskCard key={task.id} task={task} deleteTaskById={deleteTaskById} />
        )
    })
    return (
        <div>
            <h2 className='subtitle' >TaskList</h2>
            <div className='book-list' >
                {renderTask}
            </div>
        </div>
    )
}

export default TaskList