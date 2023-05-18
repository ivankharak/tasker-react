import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, deleteTaskById, onEditTask, reloader }) => {
    const renderTask = tasks.map((task, index) => {
        return (
            <TaskCard key={task.id} task={task} reloader={reloader} slnum={index + 1} deleteTaskById={deleteTaskById} onEditTask={onEditTask} />
        )
    })
    // console.log(reloader);
    return (
        <div>
            <div className='book-list' >
                {renderTask}
            </div>
        </div>
    )
}

export default TaskList