import { BadgeType } from "../../enum/badgeEnum";
import { api } from "../axios/axios";

const resource = "/pokemons";

export interface PokemonType {
  id: number;
  name: string;
  sprite: string;
  spriteShiny: string;
  type1: BadgeType;
  type2: BadgeType;
  hp: number;
  atk: number;
  spatk: number;
  def: number;
  spdef: number;
  speed: number;
  abilityHidden: string;
  abilityNormal: string;
}

export interface ParamsTypePokemon {
  species?: string;
}

const getPokemon = async (props: ParamsTypePokemon) => {
  const params = { name: props };

  const data = await api.get(`${resource}`, { params });
  return data;
};

export const pokemonApi = {
  getPokemon,
};
