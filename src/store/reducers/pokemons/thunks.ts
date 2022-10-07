import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllPokemons, getPokemonInfo } from '../../../api/pokemonApi';
import type { IGetAllPokemonParams, IGetPokemonParams } from '../../../types/pokemons';
import { pokemonsSlice } from './slicer';

const {
  getPokemonsAction,
  getPokemonInfoAction,
} = pokemonsSlice.actions;

export const getAllPokemonsReq = createAsyncThunk('main/all-pokemons',
  async (params: IGetAllPokemonParams, { dispatch }) => {
    try {
      const res = await getAllPokemons(params.page);
      const pokemons = [];
      for (let i = 0; i < res.length; i++) {
        const pokemon = await getPokemonInfo(res[i].url); // eslint-disable-line
        pokemon.url = res[i].url;
        pokemons.push(pokemon);
      }
      dispatch(getPokemonsAction(pokemons));
    } catch (err) {
      toast((err as Error).message);
    }
  });

export const getPokemonReq = createAsyncThunk('pokemonPage',
  async (params: IGetPokemonParams, { dispatch }) => {
    try {
      const res = await getPokemonInfo(params.url);
      dispatch(getPokemonInfoAction(res));
    } catch (err) {
      toast((err as Error).message);
    }
  });
