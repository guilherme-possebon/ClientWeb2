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
  description: string;
  abilityHidden: string;
  abilityNormal: string;
}

interface ParamsType {
  limit: number;
  offset: number;
  page: number;
}

const getPokemons = async () => {
  const params: ParamsType = { limit: 30, offset: 0, page: 1 };
  return await api.get(`${resource}`, { params });
};

const getOnePokemon = async (id: number) => {
  return await api.get(`${resource}/${id}`);
};

export const PokedexApi = {
  getPokemons,
  getOnePokemon,
};
