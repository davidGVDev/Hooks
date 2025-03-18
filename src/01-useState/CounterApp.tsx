import { useState } from "react";

interface CounterState {
  counter1: number;
  counter2: number;
  counter3: number;
}

export const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState<CounterState>(
    {
      counter1: 10,
      counter2: 20,
      counter3: 30,
    }
  );

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />
      <button
        className="btn btn-outline-primary"
        onClick={() =>
          setCounter((prevState) => ({
            ...prevState,
            counter1: prevState.counter1 + 1,
          }))
        }
      >
        +1
      </button>
    </>
  );
};
