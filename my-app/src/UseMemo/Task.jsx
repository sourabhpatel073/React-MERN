import React, { useState } from 'react';

function Task({ handleDelete, handleEdit, todo, handleToggle }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);

    function saveEdit() {
        handleEdit(todo.id, editedTitle);
        setIsEditing(false);
    }

    return (
        <div>
            {isEditing ? (
                <>
                    <input value={editedTitle} onChange={e => setEditedTitle(e.target.value)} />
                    <button onClick={saveEdit}>Save</button>
                </>
            ) : (
                <h1>{todo.title}</h1>
            )}

            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleToggle(todo.id)}>
                {todo.status ? 'Completed' : 'Pending'}
            </button>
        </div>
    );
}

export default React.memo(Task);
