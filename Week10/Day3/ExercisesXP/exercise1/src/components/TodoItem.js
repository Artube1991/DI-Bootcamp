import React from "react";
import { useDispatch, } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todoSlice";

const ToDoItem = (props) => {
  const dispatch = useDispatch();
  


  return (
    <>
    <button onClick={() => dispatch(toggleTodo(props.todo.id))}>Change status</button>
    <button onClick={() => dispatch(removeTodo(props.todo.id))}>Remove</button>
    </>
  )
}

export default ToDoItem