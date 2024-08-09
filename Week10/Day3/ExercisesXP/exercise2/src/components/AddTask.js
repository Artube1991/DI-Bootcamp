import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addingTask } from "../features/tasksSlice";


const AddTask = () => {
  const dispatch = useDispatch();
  const textRef = useRef();

return (
  <>
  <input
        type="text"
        placeholder="Add todo"
        ref={textRef}/>
  <button onClick={() => dispatch(addingTask(textRef.current.value))}>Add Todo</button>
  </>
)
}

export default AddTask