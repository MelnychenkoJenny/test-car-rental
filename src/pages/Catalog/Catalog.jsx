import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars, getAllCarsWithoutPage } from 'redux/cars/carsOperations';
import { useCars } from 'hooks';
import { clearCarsData } from 'redux/cars/carsSlice';
import { useState } from 'react';
import { Filter } from 'components/Filter';
import { CarList } from 'components/CarList';
import { BtnMore } from './Catalog.styled';
import { Loading } from 'components/Loading';
import { ContainerMain } from 'components/SharedLayout/SharedLayout.styled';
import { Error } from 'components/Error';
import { getFilteredCars } from 'components/helpers/getFilteredCars';

const Catalog = () => {
  const dispatch = useDispatch();
  const {
    allCars,
    allCarsForFilter,
    onFilter,
    brandFilter,
    priceFilter,
    mileageFrom,
    mileageTo,
    isLoading,
    error,
  } = useCars();
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const height = 426;
    if (allCars.length > 8) {
      window.scrollBy({
        top: height * 1.3,
        behavior: 'smooth',
      });
    }
  }, [allCars]);

  useEffect(() => {
    dispatch(clearCarsData());
    setShowButton(false);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCars(page));
    setShowButton(true);
  }, [dispatch, page]);

  useEffect(() => {
    if (onFilter) {
      dispatch(getAllCarsWithoutPage());
    }
  }, [dispatch, onFilter]);

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1);
  };

  const filteredCars = getFilteredCars(
    allCarsForFilter,
    brandFilter,
    priceFilter,
    mileageFrom,
    mileageTo
  );

  const showBtnMore =
    allCars.length / 8 >= page && !isLoading && showButton && !onFilter;

  const combinedCars = onFilter ? filteredCars : allCars;

  return (
    <ContainerMain>
      {isLoading && !error && <Loading />}
      <Filter />
      <section>
        {filteredCars.length === 0 && onFilter ? (
          <Error emptyFilter={true} />
        ) : (
          <CarList data={combinedCars} />
        )}

        {showBtnMore && (
          <BtnMore onClick={handleLoadMoreClick}>Load more</BtnMore>
        )}
      </section>
    </ContainerMain>
  );
};

export default Catalog;
