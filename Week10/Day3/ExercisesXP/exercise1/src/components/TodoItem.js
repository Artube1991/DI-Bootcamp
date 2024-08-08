import React from "react";
import { useDispatch } from "react-redux";

import { toggleTodo, removeTodo } from "../features/todoSlice";

function ToDoItem() {
    const dispatch = useDispatch()

const handleToggle = (id) => {
    dispatch({ type: toggleTodo, id, });
    };


  const handleRemove = (id) => {
      dispatch({ type: removeTodo, id });
  }


  return (
    <>
    <button onClick={() => handleToggle(todo.id)}>Change status</button>
    <button onClick={() => handleRemove(todo.id)}>Remove</button>
    </>
  )
}

export default ToDoItem