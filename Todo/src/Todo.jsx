import React from 'react';
import { useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const newTodo = (e) => {
        setInput(e.target.value);
    };

    const addNewTodo = () => {
        setTasks([...tasks, input]);
        setInput('');
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" value={input} onChange={newTodo} />
            <button onClick={addNewTodo}>Add Todo</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
            


}

export default Todo;