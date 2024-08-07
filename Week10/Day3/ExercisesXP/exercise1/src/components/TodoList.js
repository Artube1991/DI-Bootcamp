import React from "react";
import { useSelector } from "react-redux";
import { todoSlice } from "../features/todoSlice";

function TodoList() {
    const todos = useSelector(state => state.todoSlice);
}

return (
    <ul>
    {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} {todo.status}
        </li>
))}
    </ul>
)

export default TodoList

