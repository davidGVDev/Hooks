import { useLayoutEffect, useRef } from "react";

interface Pokemon {
  id: number;
  name: string;
  sprites: string[];
}
export const PokemonCard = ({ id, name, sprites = [] }: Pokemon) => {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const { height, width }: any = h2Ref.current?.getBoundingClientRect();
    console.log({ height, width });
  }, [name]);

  return (
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      <h2 ref={h2Ref} className="text-capitalize" style={{ fontSize: 18 }}>
        {id} - {name}
      </h2>
      {sprites.map((sprite) => (
        <img key={sprite} className="img-fluid" src={sprite} alt={name} />
      ))}
    </section>
  );
};
