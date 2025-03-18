import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Your name"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={handleClick}>
        Set focus
      </button>
    </>
  );
};
