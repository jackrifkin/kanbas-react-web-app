import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1, title: "Learn NodeJS", due: "2021-09-09",
        description: "Create a NodeJS server with ExpressJS and various RESTful APIs", completed: false,
    });
    const [todos, setTodos] = useState([]);

    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const deleteTodo = async (todo) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
        console.log("Delete todo returned status: " + response.data);
    };

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };

    const updateTodo = async () => {
        const response = await axios.put(
            `${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (
            t.id === todo.id ? todo : t)));
        setTodo({});
        console.log("Update todo returned status: " + response.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h2>Working with Arrays</h2>
            <input value={todo.id} readOnly />
            <input
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
                value={todo.title} type="text"
            />
            <textarea
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}
                value={todo.description} type="text"
            />
            <input
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })}
                value={todo.due} type="date"
            />
            <label>
                <input
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })}
                    value={todo.completed} type="checkbox"
                />
                Completed
            </label>
            <button onClick={postTodo} >
                Post Todo
            </button>
            <button onClick={updateTodo}>
                Update Todo
            </button>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <button onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end ms-2">
                            Delete
                        </button>
                        <input
                            checked={todo.completed}
                            type="checkbox" readOnly
                        />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default WorkingWithArrays;