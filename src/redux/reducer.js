import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/carsSlice';
import { favoriteReducer } from './favorite/favoriteSlice';
import { filterReducer } from './filter/filterSlice';

const favoritePersistConfig = {
  key: 'favorite',
  storage,
};

const filterPersistConfig = {
  key: 'filter',
  storage,
};

export const reducer = {
  cars: carsReducer,
  favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  filter: persistReducer(filterPersistConfig, filterReducer),
};
