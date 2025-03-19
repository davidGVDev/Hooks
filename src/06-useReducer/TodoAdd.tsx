import { useForm } from "../hooks/useForm";

interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

export const TodoAdd = ({ onNewTodo }: { onNewTodo: (todo: Todo) => void }) => {
  const { todo, onInputChange, onResetForm } = useForm({
    todo: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewTodo({
      id: new Date().getTime() * Math.floor(Math.random() * 3),
      todo: todo,
      done: false,
    });
    onResetForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          className="form-control"
          placeholder="Tarea..."
          value={todo}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};
