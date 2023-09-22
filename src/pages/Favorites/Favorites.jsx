import { CarItem } from 'components/CarItem';
import { CartListStyle } from 'components/CarList/CartList.styled';
import { EmptyFavorite } from 'components/EmptyFavorite/EmptyFavorite';
import { Error } from 'components/Error';
import { Filter } from 'components/Filter';
import { getFilteredCars } from 'components/helpers/getFilteredCars';
import { useCars } from 'hooks';
import { FavoriteWrap } from './Favorites.styled';

const Favorites = () => {
  const { favorite, brandFilter, priceFilter, mileageFrom, mileageTo } =
    useCars();

  const filteredCars = getFilteredCars(
    favorite,
    brandFilter,
    priceFilter,
    mileageFrom,
    mileageTo
  );

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
