import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IPokemon, IState } from '../../../types/pokemons';

const getPokemonsAction = (state: IState, action: PayloadAction<Array<IPokemon>>) => {
  const stateChange = state;
  stateChange.pokemons = action.payload;
};

const changePageAction = (state: IState, action: PayloadAction<number>) => {
  const stateChange = state;
  stateChange.page = action.payload;
};

const getPokemonInfoAction = (state: IState, action: PayloadAction<IPokemon>) => {
  const stateChange = state;
  stateChange.currentPokemon = action.payload;
};

export const initialState: IState = {
  pokemons: [],
  currentPokemon: {
    id: 0,
    name: '',
    url: '',
    abilities: [],
    types: [],
    base_experience: 0,
    height: 0,
    stats: [],
    weight: 0,
    sprites: {
      back_default: '',
      back_female: '',
      back_shiny: '',
      back_shiny_female: '',
      front_default: '',
      front_shiny: '',
      front_shiny_female: '',
    },
  },
  page: 1,
  pageCount: [1, 2, 3, 4, 5],
};
export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemonsAction,
    changePageAction,
    getPokemonInfoAction,
  },
});

export default pokemonsSlice.reducer;
