import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: "David2",
    email: "david@gmail.com",
  });
  const { userName, email } = formState;

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("formState", formState);
  }, [formState]);

  useEffect(() => {
    console.log("email", email);
  }, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <input
        className="form-control mt-2"
        type="text"
        placeholder="userName"
        name="userName"
        value={userName}
        onChange={handleInputChange}
      />
      <input
        className="form-control mt-2"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      {(userName === "David") && <Message />}
    </>
  );
};
