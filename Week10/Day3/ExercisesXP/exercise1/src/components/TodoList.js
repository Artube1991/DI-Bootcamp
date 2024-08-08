import React from "react";
import { useSelector } from "react-redux";
import { displayTodo } from "../features/todoSlice";
import { todoSlice } from "../features/todoSlice";
import ToDoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector(state => state.todoList);
    console.log("alexey", todos);

return (
    <ul>
    {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} {todo.status}
          <ToDoItem todo={todo}/>
        </li>
))}
    </ul>
)
}

export default TodoList

