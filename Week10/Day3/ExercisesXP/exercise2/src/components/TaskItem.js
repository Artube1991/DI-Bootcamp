import React from "react";
import { useDispatch, } from "react-redux";
import { toggleTask, removeTask } from "../features/tasksSlice";

const TaskItem = (props) => {
  const dispatch = useDispatch();

  return (
    <>
    <button onClick={() => dispatch(toggleTask(props.todo.id))}>Change status</button>
    <button onClick={() => dispatch(removeTask(props.todo.id))}>Remove</button>
    </>
  )
}

export default TaskItem