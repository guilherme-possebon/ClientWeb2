import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { PokedexGrid } from "./styles";
import { pokemonApi, PokemonType } from "../../api/routes/PokedexApi";
import animation from "../../assets/animatation.json";
import Lottie from "react-lottie";

export function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await pokemonApi.getPokemon({});
    setPokemons(response.data);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <PokedexGrid>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <Card
            spriteShiny={pokemon.spriteShiny}
            key={pokemon.id}
            sprite={pokemon.sprite}
            name={pokemon.name}
            type1={pokemon.type1}
            type2={pokemon.type2}
            hp={pokemon.hp}
            atk={pokemon.atk}
            spatk={pokemon.spatk}
            def={pokemon.def}
            spdef={pokemon.spdef}
            speed={pokemon.speed}
            abilityHidden={pokemon.abilityHidden}
            abilityNormal={pokemon.abilityNormal}
          />
        ))
      ) : (
        <Lottie options={defaultOptions} height={400} width={800} />
      )}
    </PokedexGrid>
  );
}
