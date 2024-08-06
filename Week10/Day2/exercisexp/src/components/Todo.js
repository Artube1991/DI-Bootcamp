import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import { todoReducer } from "../redux/reducer";

import { ADDING, TOGGLING, REMOVING } from "../redux/actions";

function ToDoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [todoText, setTodoText] = useState("");
  
    const handleAdd = () => {
      if (todoText.trim() === "") return;
      dispatch({ type: ADDING, text: todoText });
      setTodoText("");
    };
  
    const handleRemove = (id) => {
      dispatch({ type: REMOVING, id });
    };

    return (
        <div>
          <h1>My Todo List</h1>
          <input
            type="text"
            placeholder="Add todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button onClick={handleAdd}>Add Todo</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text} {todo.status}
                <button onClick={() => handleRemove(todo.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      );
    };

    const mapStateToProps = (state) => {
        return {
          id: state.todoReducer.id,
          text: state.todoReducer.text,
          status: state.todoReducer.status,
        };
      };
      
      const mapDispatchToProps = (dispatch) => {
        return {
          add: () =>
            dispatch({
              type: ADDING,
            }),
            remove: () =>
                dispatch({
                  type: REMOVING,
                }),
        };
      };

    export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);