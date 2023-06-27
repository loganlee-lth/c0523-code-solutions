function PokemonList({ pokedex }) {
  const li = pokedex.map(pokemon =>
    <li key={pokemon.number}>{pokemon.name}</li>
  );
  return <ul>{li}</ul>;
}

export default PokemonList;
