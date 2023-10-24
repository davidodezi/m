import { createContext,useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [listed, setlisted] = useState([]);

    const todoDeletedHandler = (toDelete) => {
        if (window.confirm("Are you sure?")) {
            setlisted(listed.filter((item) => item.id !== toDelete))
        }
    }

    const toBeDoneWork = (addToList) => {
        setlisted([addToList, ...listed])
    }


    const contextObj = {
        listed,
        todoDeletedHandler,
        toBeDoneWork
    }


    return (
        <TodoContext.Provider value={contextObj}>
            {children}
        </TodoContext.Provider>
    )

}

export default TodoContext