import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "../03-example/LoadingMessage";
import { PokemonCard } from "../03-example/PokemonCard";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  const handlePrevious = () => {
    decrement();
  };

  const handleNext = () => {
    increment();
  };

  return (
    <>
      <h1>Pokemon info</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button className="btn btn-outline-primary mx-2" onClick={handlePrevious}>
        Anteriores
      </button>
      <button className="btn btn-outline-primary mx-2" onClick={handleNext}>
        Siguiente
      </button>
    </>
  );
};
