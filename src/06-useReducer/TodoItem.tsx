interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

export const TodoItem = ({
  todo,
  handleDelete,
  handleToggle,
}: {
  todo: Todo;
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
}) => {
  return (
    <>
      <li
        key={todo.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span
          onClick={() => handleToggle(todo.id)}
          className={`align-self-center ${todo.done && "text-decoration-line-through"}`}
        >
          {todo.todo}
        </span>
        <button
          onClick={() => handleDelete(todo.id)}
          className="btn btn-danger"
        >
          X
        </button>
      </li>
    </>
  );
};
