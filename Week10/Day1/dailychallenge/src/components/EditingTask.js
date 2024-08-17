import React, { useRef } from "react";
import { useContext } from "react";
import { TaskContext } from "../App";
import { EditTask } from "../App";

const TaskEdit = (props) => {
  const { dispatch } = useContext(TaskContext);
  const editRef = useRef();

  const editingTask = () => {
    console.log(props.id);
    dispatch({
      type: EditTask,
      payload: { id: props.id, text: editRef.current.value },
    });

    editRef.current.value = "";
  };

  return (
    <>
      <input type="text" placeholder="Edit your task here" ref={editRef} />
      <button onClick={editingTask}>EDIT</button>
    </>
  );
};

export default TaskEdit;