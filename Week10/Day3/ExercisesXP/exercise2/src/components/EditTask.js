import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { editingTask } from "../features/tasksSlice";


const EditTask = (props) => {
  const dispatch = useDispatch();
  const textChangeRef = useRef();
  const dateChangeRef = useRef();

return (
  <>
  <input
        type="text"
        placeholder="Edit task"
        ref={textChangeRef}/>
  <input
        type="date"
        placeholder="Edit date"
        ref={dateChangeRef}/>
  <button onClick={() => dispatch(editingTask({i: props.task.id, t: textChangeRef.current.value, d: dateChangeRef.current.value}))}>Edit Task</button>
  </>
)
}

export default EditTask