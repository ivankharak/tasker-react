import React from "react";

const TaskEdit = ({ task, onEditTask, onSetShowEdit }) => {
    return (
        <div className="inline" >
            <input onChange={(e) => onEditTask(task.id, e.target.value)} value={task.title} />
            <button onClick={() => onSetShowEdit(false)}>Done</button>
            {/* <button onClick={() => onEditTask(task.id, newTitle)} >Update</button> */}
        </div >
    )
}

export default TaskEdit;