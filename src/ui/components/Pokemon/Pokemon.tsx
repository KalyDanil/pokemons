import type { IPokemons } from '../../../types/pokemons';
import { PokemonStyled } from './Pokemon.style';

const Pokemon: React.FC<IPokemons> = ({ pokemon }) => {
  const types = pokemon.types.map((item, index) => {
    return <span key={index}>{item.type.name} &nbsp;</span>;
  });
  const toPokemonpage = () => {
    window.location.href = `/pokemonPage:${pokemon.id}`;
  };
  return (
    <PokemonStyled onClick={toPokemonpage}>
      <img className="sprite" src={`${pokemon.sprites.front_default}`} alt="pokemon" /> <br />
      <span>Name: {pokemon.name}</span> <br />
      <span>Types: {types}</span>
    </PokemonStyled>
  );
};

export default Pokemon;
