import  TodoDisplay from "./Todos";
import TodoContext from "../context/TodoContext";
import { useContext } from "react";

function TodoList() {
    const { listed: toBeShown, todoDeletedHandler} = useContext(TodoContext);
    return (
        <div className="container">
            {toBeShown.map((item) => <TodoDisplay deletedHandler={todoDeletedHandler} key={item.id} beShown={item}/>)}
        </div>
    );
}
export default TodoList;