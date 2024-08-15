import React, { useRef } from "react";
import { useContext } from "react";
import { TaskContext } from "../App";
import { EditTask} from "../App"

const TaskEdit = (props) => {
    const { dispatch } = useContext(TaskContext);
    const editRef = useRef();
    
    const editingTask = ({ id }) => {
    dispatch({type: EditTask, id});
    editRef.current.value = "";
    };

    return (
        <>
        <input
            type="text"
            placeholder="Edit your task here"
            ref={editRef} />
        <button onClick={() => dispatch(editingTask({id: props.task.id, text: editRef.current.value}))}>
            EDIT
            </button>
        </>
    )
  
};

export default TaskEdit