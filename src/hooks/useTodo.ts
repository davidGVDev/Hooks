import { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from "../06-useReducer/todoReducer";

interface Todo {
    id: number;
    todo: string;
    done: boolean;
  }
  const initialState: any[] = [];
  
  const init = () => {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  };

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    const handleNewTodo = (todo: Todo) => {
      const action = {
        type: "add",
        payload: todo,
      };
      dispatch(action);
    };
  
    const handleDelete = (id: number) => {
      const action = {
        type: "delete",
        payload: id,
      };
      dispatch(action);
    };
  
    const handleToggle = (id: number) => {
      const action = {
        type: "toggle",
        payload: id,
      };
      dispatch(action);
    };

    const todosCount = todos.length;    
    const pendingTodosCount = todos.filter((todo) => !todo.done).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDelete,
        handleToggle,
    };
}
