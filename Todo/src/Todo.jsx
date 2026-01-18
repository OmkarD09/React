import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';



function Todo() {
    const [tasks, setTasks] = useState([{id: uuidv4(), title: 'Sample Task', completed: false}]);
    const [input, setInput] = useState('');

    const newTodo = (e) => {
        setInput(e.target.value);
    };

    const addNewTodo = () => {
        setTasks((prevTasks) => { return ( 
            [...prevTasks, {id: uuidv4(), title: input, completed: false}])
            });
       
        setInput('');

    }
    
    const deleteTask = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.filter((task) => task.id !== id);
        });

    };

    const isCompletedAll = () => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                return { ...task, completed: !task.completed };
            });
        });
    };

    const isCompletedOne = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                }else {
                    return task;
                }
            });
        });
    };



    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" value={input} onChange={newTodo} />
            <button onClick={addNewTodo}>Add Todo</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.title}</span> <button onClick={() => deleteTask(task.id)}>Delete</button>
                                                <button onClick={() => isCompletedOne(task.id)}>{task.completed ? "Completed" : "Mark Complete"}</button></li>
                ))}
            </ul>

            <br />
            <br />
            <br />
            <button onClick={isCompletedAll}>Mark All Complete</button>
        </div>
    );
            


}

export default Todo;