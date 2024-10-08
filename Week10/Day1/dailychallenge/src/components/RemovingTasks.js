import { useContext } from "react";
import { TaskContext } from "../App";
import { TaskRemove} from "../App"

const RemovingTask = ({ id }) => {
    const { dispatch } = useContext(TaskContext);

    const taskRemoving = () => {
        console.log(id);
        dispatch({type: TaskRemove, id});
    };

    return <button onClick={() => taskRemoving()}>Remove</button>;
};

export default RemovingTask