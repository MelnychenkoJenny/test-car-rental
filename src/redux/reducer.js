import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';
// import { persistReducer } from 'redux-persist';
import { carsReducer } from './cars/carsSlice';
import { favoriteReducer } from './favorite/favoriteSlice';
// import { combineReducers } from '@reduxjs/toolkit';

const favoritePersistConfig = {
  key: 'favorite',
  storage,
};


export const reducer = {
    cars: carsReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer)
}
