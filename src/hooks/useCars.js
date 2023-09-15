import { useSelector } from 'react-redux';
import {
  selectCars,
  selectError,
  selectIsLoading,
} from 'redux/cars/carsSelectors';
import { selectFavorite } from 'redux/favorite/favoriteSelectors';

export const useCars = () => {
  return {
    allCars: useSelector(selectCars),
    isLoading: useSelector(selectIsLoading),
    error: useSelector(selectError),
    favorite: useSelector(selectFavorite)
  };
};

// import { useCars } from 'components/hooks';
// const { allCars, isLoading, error, favorite } = useCars();