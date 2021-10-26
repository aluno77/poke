import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <div>
      <li>
        <Link href={`/pokemone/${id}`}>{pokemon.name}</Link>
      </li>
    </div>
  );
};

export default function Pokemones({ pokemones }) {
  console.log(pokemones);
  return (
    <div>
      <p>Minha Lista de Pokemons</p>
      <ul>
        {pokemones.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await resp.json();

  return {
    props: { pokemones: data.results },
  };
};
