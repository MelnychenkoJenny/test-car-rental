import { useSelector } from 'react-redux';
import {
  selectCars,
  selectError,
  selectIsLoading,
} from 'redux/cars/carsSelectors';

export const useCars = () => {
  return {
    allCars: useSelector(selectCars),
    isLoading: useSelector(selectIsLoading),
    error: useSelector(selectError),
  };
};

// import { useCars } from 'components/hooks';
// const { allCars, isLoading, error } = useCars();