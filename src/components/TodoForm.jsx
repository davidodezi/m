import Card from "../shared/card";
import MainButton from "./MainButton";
import { useState } from "react";
import { v4 } from "uuid";
import TodoContext from "../context/TodoContext";
import { useContext } from "react";

function TodoForm() {
    const { toBeDoneWork } = useContext(TodoContext);
    const  [text,setText] = useState("");

    const textHandler = (e) => {
        setText(e.target.value);
    };

    const sendFormHandler = (e) => {
        e.preventDefault();

        const myObj = {
            id: v4(),
            textTodo: text,
        };

        myObj.textTodo.trim()!=="" && toBeDoneWork(myObj);
        setText("");
    };

    return (
        <Card addin={false}>
            <form onSubmit={sendFormHandler}>
                <input onChange={textHandler} type="text" value={text} placeholder="Enter your Todo"/>
                <MainButton type="submit">Send</MainButton>
            </form>
        </Card>
    );
}

export default TodoForm;