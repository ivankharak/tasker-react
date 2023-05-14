import React, { useState } from 'react';

const TaskEdit = ({ task, onEditTask }) => {
    const [newTitle, setNewTitle] = useState(task.title);
    return (
        <div>
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
        </div>
    )
}

export default TaskEdit;