import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { PokedexGrid } from "./styles";
import { PokedexApi, PokemonInterface } from "../../api/routes/PokedexApi";

export function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await PokedexApi.getPokemons();
    setPokemons(response.data);
  };

  return (
    <PokedexGrid>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <Card
            spriteShiny={pokemon.spriteShiny}
            id={pokemon.id}
            key={pokemon.id}
            sprite={pokemon.sprite}
            name={pokemon.name}
            type1={pokemon.type1}
            type2={pokemon.type2}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </PokedexGrid>
  );
}
