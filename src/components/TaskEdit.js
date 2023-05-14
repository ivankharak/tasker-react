import React from "react";

const TaskEdit = ({ task, onEditTask, onSetShowEdit }) => {
    return (
        <div className="inline" >
            <form onSubmit={(e) => e.preventDefault()}>
                <input onChange={(e) => onEditTask(task.id, e.target.value)} value={task.title} />
                <button onClick={() => onSetShowEdit(false)}>✔️</button>
            </form>
        </div >
    )
}

export default TaskEdit;