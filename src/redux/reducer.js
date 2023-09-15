// import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';
// import { persistReducer } from 'redux-persist';
import { carsReducer } from './cars/carsSlice';
// import { combineReducers } from '@reduxjs/toolkit';

// const carPersistConfig = {
//   key: 'cars',
//   storage,
//   blacklist: ['currentPage', 'allCars'],
// };

// export const reducer = {
//   cars: persistReducer(carPersistConfig, carsReducer),
// };



export const reducer = {
    cars: carsReducer
}


// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['cars'], // Включити будь-які інші редюсери, крім cars
//   };
  
//   const rootReducer = combineReducers({
//     cars: carsReducer,
//   });

// export const reducer = persistReducer(persistConfig, rootReducer);
