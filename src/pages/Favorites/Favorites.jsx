import { CarItem } from 'components/CarItem';
import { CartListStyle } from 'components/CarList/CartList.styled';
import { EmptyFavorite } from 'components/EmptyFavorite/EmptyFavorite';
import { ContainerMain } from 'components/SharedLayout/SharedLayout.styled';
import { useCars } from 'hooks';
import { FavoriteWrap } from './Favorites.styled';

const Favorites = () => {
  const { favorite } = useCars();

  return (
   <ContainerMain>
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
   </ContainerMain>
  );
};

export default Favorites;
