import { createSlice } from '@reduxjs/toolkit';
import { getAllCars, getAllCarsWithoutPage } from './carsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handlegetAllCarsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allCars = [...state.allCars, ...payload];
};

const handlegetAllCarsWithoutPageFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allCarsForFilter = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsInitialState = {
  allCars: [],
  allCarsForFilter: [],
  isLoading: false,
  error: null,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  reducers: {
    clearCarsData: state => {
      state.allCars = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.fulfilled, handlegetAllCarsFulfilled)
      .addCase(
        getAllCarsWithoutPage.fulfilled,
        handlegetAllCarsWithoutPageFulfilled
      )
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const { clearCarsData } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
