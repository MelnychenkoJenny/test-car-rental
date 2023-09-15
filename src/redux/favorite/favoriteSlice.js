import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteArray: [],
  },
  reducers: {
    addToFavorite: (state, { payload }) => {
      state.favoriteArray.push(payload);
    },
    removeFromFavorite: (state, { payload }) => {
      state.favoriteArray = state.favoriteArray.filter(
        car => car.id !== payload.id
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
