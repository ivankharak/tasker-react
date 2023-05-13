import React from 'react';

const TaskCard = ({ id, title }) => {
    return (
        <div>
            <div key={id}>{id}. {title}</div>
        </div>
    )
}

export default TaskCard