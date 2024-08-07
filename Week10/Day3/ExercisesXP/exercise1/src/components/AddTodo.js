import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoSlice } from "../features/todoSlice";

function TodoList() {
    const todos = useSelector(state => state.todoSlice);
    const [todoText, setTodoText] = useState("");

    const handleAdd = () => {
        if (todoText.trim() === "") return;
        dispatch({ type: ADDING, text: todoText });
        setTodoText("");
      };


}

