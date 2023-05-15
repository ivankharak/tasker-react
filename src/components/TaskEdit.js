import React from "react";

const TaskEdit = ({ task, onEditTask, onSetShowEdit }) => {
    return (
        <div >
            <form onSubmit={(e) => e.preventDefault()} className="book-edit" >
                <input className="input" onChange={(e) => onEditTask(task.id, e.target.value)} value={task.title} />
                <button onClick={() => onSetShowEdit(false)} className="button is-primary" >Update</button>
            </form>
        </div >
    )
}

export default TaskEdit;