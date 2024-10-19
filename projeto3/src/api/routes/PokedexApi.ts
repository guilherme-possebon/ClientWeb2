import { BadgeType } from "../../enum/badgeEnum";
import { api } from "../axios/axios";

const resource = "/pokemons";

export interface PokemonInterface {
  id: number;
  name: string;
  sprite: string;
  spriteShiny: string;
  type1: BadgeType;
  type2: BadgeType;
}

// interface ParamsType {
//   limit: number;
//   offset: number;
//   page: number;
// }

const getPokemons = async () => {
  // params: { limit: 10, offset: 0, page: 1 }
  return await api.get(`${resource}`);
};

export const PokedexApi = {
  getPokemons,
};
