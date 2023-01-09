import { useEffect, useReducer } from "react";
import todoReducer from "../components/useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        const action = {
            type: "add-todo",
            payload: todo,
        };

        dispatch(action);
    };

    const deleteTodo = (id) => {
        const action = {
            type: "remove-todo",
            payload: id,
        };

        dispatch(action);
    };

    const toggleTodo = (id) => {
        const action = {
            type: "toggle-todo",
            payload: id,
        };

        dispatch(action);
    };

    const todosCount = {
        todosCount: todos.length,
        todosPendingCount: todos.filter(td=>!td.done).length
    }

    return (
        {
            todos,
            ...todosCount,
            addTodo,
            deleteTodo,
            toggleTodo,
        }
    )
}