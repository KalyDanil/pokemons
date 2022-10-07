import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonReq } from '../../../store/reducers/pokemons/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { PokemonStyled } from './PokemonPage.style';

const PokemonPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.pokemons.currentPokemon);
  const params = useParams();
  const id = params.id ? +(params.id).slice(1) : 0;

  useEffect(() => {
    dispatch(getPokemonReq({ url: `https://pokeapi.co/api/v2/pokemon/${id}/` }));
  }, [dispatch, id]);

  const abilities = pokemon.abilities.map((item, index) => {
    return (
      <div key={index}>
        Name:&nbsp;<span>{item.ability.name}</span> <br />
        Link:&nbsp;<span>{item.ability.url}</span> <br />
      </div>
    );
  });

  const sprites = Object.keys(pokemon.sprites).map((item, index) => {
    const key = item as keyof typeof pokemon.sprites;
    if (!pokemon.sprites[key]) {
      return;
    }
    if (item === 'other' || item === 'versions') {
      return;
    }
    return (
      <div key={index}>
        <img className="sprite" src={`${pokemon.sprites[key]}`} alt="pokemon" /> <br />
        <span>{key.split('_').join(' ')}</span>
      </div>
    );
  });

  const types = pokemon.types.map((item, index) => {
    return <span key={index}>{item.type.name} &nbsp;</span>;
  });

  const stats = pokemon.stats.map((item, index) => {
    return (
      <div key={index}>
        <span>Name:&nbsp; {item.stat.name}</span> <br />
        <span>Base stat:&nbsp; {item.base_stat}</span> <br />
        <span>Effort:&nbsp; {item.effort}</span>
      </div>
    );
  });

  return (
    <PokemonStyled>
      <h1>
        {pokemon.name.toUpperCase()}
      </h1>
      <div>
        <div>
          <h2>Sprites</h2>
          <div className="sprites">
            {sprites}
          </div>
        </div>
        <div>
          <h2>Base info</h2>
          <div className="divInfo">
            <span>Base experience:&nbsp; {pokemon.base_experience}</span> <br />
            <span>Height:&nbsp; {pokemon.height}</span> <br />
            <span>Weight:&nbsp; {pokemon.weight}</span>
          </div>
        </div>
        <div>
          <h2>Stats</h2>
          <div className="divInfo">
            {stats}
          </div>
        </div>
        <div>
          <h2>Types</h2>
          <div className="divInfo">
            {types}
          </div>
        </div>
        <div>
          <h2>Abilities</h2>
          <div className="divInfo">
            {abilities}
          </div>
        </div>
      </div>
    </PokemonStyled>
  );
};

export default PokemonPage;
