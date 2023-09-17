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

  // console.log(mileageFrom, 888);
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

  const filteredCars = allCarsForFilter.filter(car => {
    let isMatch = true;
    if (brandFilter) {
      isMatch = car.make === brandFilter;
    }
    if (priceFilter) {
      const match = priceFilter.match(/\$(\d+)/);
      const matchRentalPrices = car.rentalPrice.match(/\$(\d+)/);
      const matchPrice = match[1];
      const matchRentalPrice = matchRentalPrices[1];
      const priceStep = 10;

      const minPrice = Number(matchPrice) - priceStep;
      const maxPrice = Number(matchPrice) + priceStep;
      if (!(matchRentalPrice >= minPrice && matchRentalPrice <= maxPrice)) {
        isMatch = false;
      }
    }
    if (mileageFrom) {
      if (!(car.mileage >= mileageFrom)) {
        isMatch = false;
      }
    }

    if (mileageTo) {
      if (!(car.mileage <= mileageTo)) {
        isMatch = false;
      }
    }

    if (mileageFrom && mileageTo) {
      if (!(car.mileage >= mileageFrom && car.mileage <= mileageTo)) {
        isMatch = false;
      }
    }

    return isMatch;
  });

  const showBtnMore =
    allCars.length / 8 >= page && !isLoading && showButton && !onFilter;

  const combinedCars = onFilter ? filteredCars : allCars;

  return (
    <ContainerMain>
      {!isLoading && !error ? <Filter /> : <Loading />}

      <section>
        {filteredCars.length === 0 && onFilter ? (
          <div>Nema machin</div>
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
