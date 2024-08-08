import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (todoText.trim() === "") return;
        dispatch({ type: addTodo, text: todoText });
        setTodoText("");
      };

      return (
        <button onClick={handleAdd}>Add Todo</button>
      )
}

export default AddTodo
