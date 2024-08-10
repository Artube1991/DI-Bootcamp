import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addingTask } from "../features/tasksSlice";


const AddTask = () => {
  const dispatch = useDispatch();
  const textRef = useRef();
  const dateRef = useRef();

return (
  <>
  <input
        type="text"
        placeholder="Add todo"
        ref={textRef}/>
  <input
        type="date"
        placeholder="Add date"
        ref={dateRef}/>
  <button onClick={() => dispatch(addingTask({t: textRef.current.value, d: dateRef.current.value}))}>Add Todo</button>
  </>
)
}

export default AddTask