import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addingTodo } from "../features/todoSlice";


const AddTodo = () => {
  const dispatch = useDispatch();
  const textRef = useRef();

return (
  <>
  <input
        type="text"
        placeholder="Add todo"
        ref={textRef}/>
  <button onClick={() => dispatch(addingTodo(textRef.current.value))}>Add Todo</button>
  </>
)
}

export default AddTodo
