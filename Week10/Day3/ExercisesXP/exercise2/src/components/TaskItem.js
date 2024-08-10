import React from "react";
import { useDispatch, } from "react-redux";
import { toggleTask, removeTask } from "../features/tasksSlice";

const TaskItem = (props) => {
  const dispatch = useDispatch();

  return (
    <>
    <button onClick={() => dispatch(toggleTask(props.task.id))}>Change status</button>
    <button onClick={() => dispatch(removeTask(props.task.id))}>Remove</button>
    </>
  )
}

export default TaskItem