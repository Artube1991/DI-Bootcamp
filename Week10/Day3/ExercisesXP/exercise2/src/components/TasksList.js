import React from "react";
import { useSelector } from "react-redux";
// import { tasksSlice } from "../features/tasksSlice";
import TaskItem from "./TaskItem";
import EditTask from "./EditTask";

const TasksList = () => {
    const tasks = useSelector(state => state.taskList);
    console.log("the tasks list: ", tasks);

return (
    <>
    <h2>Here are your tasks. You can edit them, change their status and remove any of them.</h2>
    <ul>
    {tasks.map((task) => (
        <li key={task.id}>
          {task.text} {task.date} {task.status}
          <EditTask task={task}/>
          <TaskItem task={task}/>
        </li>
))}
    </ul>
    </>
)
}

export default TasksList

