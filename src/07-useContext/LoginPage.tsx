import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { setUser, user } = useContext(UserContext);
  return (
    <>
      <h2>LoginPage</h2>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser({
        id: 1234,
        name: "John Doe",
        email: "john.doe@example.com",
      })}>
        Login
      </button>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  )
}
