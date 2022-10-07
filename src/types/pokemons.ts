export interface IPokemon {
  id: number;
  name: string;
  url: string;
  abilities: Array<IAbilities>;
  types: Array<IPokemonTypes>;
  base_experience: number;
  height: number;
  stats: Array<IStats>;
  weight: number;
  sprites: ISprites;
}

export interface IAbilities {
  ability: {
    name: string;
    url: string;
  };
}

export interface IStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}
export interface IPokemonTypes {
  type: {
    name: string;
  };
}
export interface IPokemons {
  pokemon: IPokemon;
}

export interface IState {
  pokemons: Array<IPokemon>;
  currentPokemon: IPokemon;
  page: number;
  pageCount: Array<number>;
}

export interface ISprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface IPokemonsResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Array<IPokemon>;
}

export interface IGetAllPokemonParams {
  page: number;
}

export interface IGetPokemonParams {
  url: string;
}
