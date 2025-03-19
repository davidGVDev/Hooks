import { TodoItem } from "./TodoItem";
interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

export const TodoList = ({
  todos,
  handleDelete,
  handleToggle,
}: {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
}) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </>
  );
};
