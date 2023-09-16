import { CarItem } from 'components/CarItem';
import { CartListStyle } from 'components/CarList/CartList.styled';
import { EmptyFavorite } from 'components/EmptyFavorite/EmptyFavorite';
import { useCars } from 'hooks';
import { FavoriteWrap } from './Favorites.styled';

const Favorites = () => {
  const { favorite } = useCars();

  return (
    <FavoriteWrap>
      {favorite.length === 0 ? (
        <EmptyFavorite/>
      ) : (
        <CartListStyle>
          {favorite.map(car => (
            <CarItem dataCar={car} key={car.id} />
          ))}
        </CartListStyle>
      )}
    </FavoriteWrap>
  );
};

export default Favorites;
