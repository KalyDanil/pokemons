import { api } from '.';
import type { IPokemon, IPokemonsResponse } from '../types/pokemons';
import { baseURL } from '../utils/constants/baseUrl';

export const getAllPokemons = async (page:number) => {
  const offset = 27 * (page - 1);
  const res: IPokemonsResponse = await api.get(`${baseURL}pokemon/?limit=27&offset=${offset}`);
  return res.results;
};

export const getPokemonInfo = async (url: string) => {
  const res: IPokemon = await api.get(url);
  return res;
};
