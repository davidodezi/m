import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TaskCount() {
    const { listed: Count } = useContext(TodoContext);
    return (
        <div className="taskcount container">
            <h1>Task Count {Count.length}</h1>
        </div>
    );
}

// TaskCount.defaultProps = {
//    toBeShown: []
//}

export default TaskCount;