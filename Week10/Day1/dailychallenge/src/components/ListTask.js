import { useContext } from "react";
import { TaskContext } from "../App";
import RemovingTask from "./RemovingTasks";

const ListTask = (props) => {
    const { state } = useContext(TaskContext);

    return (
        <>
        {state.tasks.map((task) => {
            return (
                <div key={task.id}>
                    {task.name}
                    <RemovingTask id={task.id} />
                </div>
            );
        })}  
        </>
    );
};

export default ListTask