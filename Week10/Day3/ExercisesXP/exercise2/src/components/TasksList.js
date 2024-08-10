import React from "react";
import { useSelector } from "react-redux";
// import { tasksSlice } from "../features/tasksSlice";
import TaskItem from "./TaskItem";

const TasksList = () => {
    const tasks = useSelector(state => state.taskList);
    console.log("the tasks list: ", tasks);

return (
    <ul>
    {tasks.map((task) => (
        <li key={task.id}>
          {task.text} {task.date} {task.status}
          <TaskItem task={task}/>
        </li>
))}
    </ul>
)
}

export default TasksList

