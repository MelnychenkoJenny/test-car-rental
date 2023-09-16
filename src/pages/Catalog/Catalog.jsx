import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars } from 'redux/cars/carsOperations';
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
  const { allCars, isLoading, error } = useCars();
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);

  console.log(allCars);

  console.log('page :>> ', page);

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

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1);
  };

  const showBtnMore = allCars.length / 8 >= page && !isLoading && showButton;

  return (
    <ContainerMain>
      {!isLoading && !error ? <Filter /> : <Loading />}

      <section>
        {allCars.length !== 0 && <CarList data={allCars} />}
        {showBtnMore && (
          <BtnMore onClick={handleLoadMoreClick}>Load more</BtnMore>
        )}
      </section>
    </ContainerMain>
  );
};

export default Catalog;
