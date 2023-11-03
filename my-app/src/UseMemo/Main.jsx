import React, { useState } from 'react';
import Task from './Task';

export default function Main() {
    const [todos, settodos] = useState([]);
    const [item, setItem] = useState({ title: '' });

    function handleDelete(id) {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        settodos(updatedTodos);
    }

    function handleEdit(id, newTitle) {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, title: newTitle } : todo
        );
        settodos(updatedTodos);
    }

    function handleChange(e) {
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    function add() {
        const newItem = {
            id: Date.now(),
            title: item.title,
            status: false
        };
        settodos([...todos, newItem]);
        setItem({ title: '' }); // Reset the input after adding
    }

    function handleToggle(id) {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, status: !todo.status } : todo
        );
        settodos(updatedTodos);
    }

    return (
        <div>
            <div>
                <input
                    placeholder='title'
                    name='title'
                    value={item.title}
                    onChange={handleChange}
                />
                <button onClick={add}>Add</button>
            </div>

            {todos.map((todo) => (
                <Task
                    key={todo.id}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleToggle={handleToggle}
                />
            ))}
        </div>
    );
}
