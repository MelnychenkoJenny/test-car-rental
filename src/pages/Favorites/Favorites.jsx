import { CarItem } from 'components/CarItem';
import { CartListStyle } from 'components/CarList/CartList.styled';
import { EmptyFavorite } from 'components/EmptyFavorite/EmptyFavorite';
import { Error } from 'components/Error';
import { Filter } from 'components/Filter';
import { useCars } from 'hooks';
import { FavoriteWrap } from './Favorites.styled';

const Favorites = () => {
  const { favorite, brandFilter, priceFilter, mileageFrom, mileageTo } =
    useCars();
  const filteredCars = favorite.filter(car => {
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

  return (
    <FavoriteWrap>
      <div>
        {favorite.length === 0 ? (
          <EmptyFavorite />
        ) : (
          <>
            <Filter />
            <CartListStyle>
              {filteredCars.length === 0 ? (
                <Error emptyFilter={true} />
              ) : (
                filteredCars.map(car => <CarItem dataCar={car} key={car.id} />)
              )}
            </CartListStyle>
          </>
        )}
      </div>
    </FavoriteWrap>
  );
};

export default Favorites;
