import styled from 'styled-components';

export const PokemonStyled = styled.div`
  width: 100%;
  flex: 1 0 auto;
  margin-bottom: 40px;

h1, h2 {
  text-align:center;
}

.sprites {
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}

.divInfo {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  div {
    margin-bottom: 10px;
  }
}
`;
