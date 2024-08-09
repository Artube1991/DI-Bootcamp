import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TodoItem";

const TasksList = () => {
    const tasks = useSelector(state => state.taskList);
    console.log("the tasks list: ", tasks);

return (
    <ul>
    {tasks.map((task) => (
        <li key={task.id}>
          {task.text} {task.date} {task.status}
          <ToDoItem todo={todo}/>
        </li>
))}
    </ul>
)
}

export default TasksList

