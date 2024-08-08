import React, { useState } from "react";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
    const [todoText, setTodoText] = useState("");

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
