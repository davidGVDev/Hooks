import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const AboutPage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2>AboutPage</h2>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>

  )
}
