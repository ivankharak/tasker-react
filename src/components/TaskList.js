import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, deleteTaskById, onEditTask }) => {
    const renderTask = tasks.map((task, index) => {
        return (
            <TaskCard key={task.id} task={task} slnum={index + 1} deleteTaskById={deleteTaskById} onEditTask={onEditTask} />
        )
    })
    return (
        <div>
            <div className='book-list' >
                {renderTask}
            </div>
        </div>
    )
}

export default TaskList