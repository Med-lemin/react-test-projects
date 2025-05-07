import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={onToggle}>{todo.text}</span>
      <button onClick={onDelete}>✖</button>
    </li>
  );
}
