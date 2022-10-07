import React, { useEffect } from 'react';
import { getAllPokemonsReq } from '../../../store/reducers/pokemons/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import Pokemon from '../../components/Pokemon/Pokemon';
import Controller from '../../containers/Controller/Controller';
import { MainStyled } from './Main.style';

const MainPage: React.FC = () => {
  const pokemons = useAppSelector((state) => state.pokemons);
  const dispatch = useAppDispatch();
  const pokemonsList = (pokemons.pokemons).map((item) => {
    return (<Pokemon pokemon={item} key={item.id} />);
  });
  const controllers = pokemons.pageCount.map((item, index) => {
    return (<Controller id={item.toString()} key={index} />);
  });
  useEffect(() => {
    dispatch(getAllPokemonsReq({ page: pokemons.page }));
  }, [dispatch, pokemons.page]);

  return (
    <MainStyled>
      <div className="pokemonContainer">
        {pokemonsList}
      </div>
      <div className="controllers">
        {controllers}
      </div>
    </MainStyled>
  );
};

export default MainPage;
