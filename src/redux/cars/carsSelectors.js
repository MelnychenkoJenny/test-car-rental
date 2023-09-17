export const selectCars = state => state.cars.allCars;
export const selectCarsFilter = state => state.cars.allCarsForFilter;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectCurrentPage = state => state.cars.currentPage;