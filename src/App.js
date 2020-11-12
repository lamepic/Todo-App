import React, { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Todo App</h1>
      </div>

      <div className="todo-form">
        <form>
          <input
            value={input}
            className="todo-input"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="todo-button" disabled={!input} onClick={addTodo}>
            <AddBoxIcon />
          </button>
        </form>
      </div>

      <div className="todo-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo}
            todo={todo}
            markComplete={markComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
