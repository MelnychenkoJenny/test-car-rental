import { useSelector } from 'react-redux';
import {
  selectCars,
  selectCarsFilter,
  selectError,
  selectIsLoading,
} from 'redux/cars/carsSelectors';
import { selectFavorite } from 'redux/favorite/favoriteSelectors';
import { selectBrand, selectMileageFrom, selectMileageTo, selectOnFilter, selectPrice } from 'redux/filter/filterSelectors';

export const useCars = () => {
  return {
    allCars: useSelector(selectCars),
    allCarsForFilter: useSelector(selectCarsFilter),
    isLoading: useSelector(selectIsLoading),
    error: useSelector(selectError),
    favorite: useSelector(selectFavorite),
    onFilter: useSelector(selectOnFilter),
    brandFilter: useSelector(selectBrand),
    priceFilter: useSelector(selectPrice),
    mileageFrom: useSelector(selectMileageFrom),
    mileageTo: useSelector(selectMileageTo)
  };
};

// import { useCars } from 'hooks';
// const { allCars, allCarsForFilter, isLoading, error, favorite, onFilter, brandFIlter } = useCars();