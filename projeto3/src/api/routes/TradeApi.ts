import { env } from "../../../env";
import { api } from "../axios/axios";
import { ParamsTypePokemon } from "./PokedexApi";

const resource = "/pokemonsRegister";

interface User {
  name: string;
  email: string;
}

interface Nature {
  name: string;
  id: number;
}

export interface TradeProps {
  id: number;
  name: string;
  type1: string;
  species: ParamsTypePokemon;
  shiny: boolean;
  ability: string;
  sex: string;
  userId: number;
  User: User;
  nature_id: number;
  Nature: Nature;
}

export interface TradeSubmit {
  name: string;
  species: string;
  ability: string;
  NatureId: number;
  type1: string;
  UserId: number;
}


const getTradeList = async () => {
  const data = await api.get(`${resource}`);
  return data;
};

const registerPokemon = async (data: TradeSubmit) => {
  data = {
    ...data,
    UserId: +env.VITE_API_USER_ID,
    NatureId: +data.NatureId
  }
  const response = await api.post(`${resource}`, data);
  return response;
}

export const tradeApi = {
  getTradeList,
  registerPokemon,
};
