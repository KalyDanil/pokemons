import React from 'react';
import { pokemonsSlice } from '../../../store/reducers/pokemons/slicer';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { ControllerStyled } from './Controller.style';

const Controller: React.FC<{id: string}> = ({ id }) => {
  const dispatch = useAppDispatch();
  const {
    changePageAction,
  } = pokemonsSlice.actions;
  const toPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const controller = (e.target as HTMLDivElement);
    dispatch(changePageAction(+controller.id));
  };
  return (
    <ControllerStyled>
      <div id={id} onClick={toPage} />
    </ControllerStyled>
  );
};

export default Controller;
