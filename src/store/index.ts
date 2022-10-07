import { configureStore } from '@reduxjs/toolkit';
import pokemons from './reducers/pokemons/slicer';

const store = configureStore({
  reducer: {
    pokemons,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export default store;
