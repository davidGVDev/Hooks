import { useCounter } from "../hooks/useCounter";

export const CounterCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button className=" m-2 btn btn-outline-primary" onClick={increment}>
        +1
      </button>
      <button className=" m-2 btn btn-outline-secondary" onClick={reset}>
        Reset
      </button>
      <button className=" m-2 btn btn-outline-primary" onClick={decrement}>
        -1
      </button>
    </>
  );
};
