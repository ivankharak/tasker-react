import React, { useState } from "react";

const TaskEdit = ({ task, onTaskEditSubmit }) => {
    const [newTitle, SetNewTitle] = useState(task.title);
    return (
        <div >
            <form onSubmit={(e) => e.preventDefault()} className="book-edit" >
                <input className="input" onChange={(e) => SetNewTitle(e.target.value)} value={newTitle} />
                <button onClick={(e) => onTaskEditSubmit(task.id, newTitle)} className="button is-primary" >Update</button>
            </form>
        </div >
    )
}

export default TaskEdit;