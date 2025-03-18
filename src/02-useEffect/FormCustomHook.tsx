import { useForm } from "../hooks/useForm";

export const FormCustomHook = () => {
  const { userName, email, password, onInputChange, onResetForm } = useForm({
    userName: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Custom Hook Form</h1>
      <hr />
      <input
        className="form-control mt-2"
        type="text"
        placeholder="userName"
        name="userName"
        value={userName}
        onChange={onInputChange}
      />
      <input
        className="form-control mt-2"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        className="form-control mt-2"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
