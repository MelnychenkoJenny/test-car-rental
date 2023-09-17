import { CarItem } from 'components/CarItem';
import { CartListStyle } from './CartList.styled';

export const CarList = ({ data }) => {
  return (
    <>
      <CartListStyle>
        {data.map(car => (
          <CarItem dataCar={car} key={car.id} />
        ))}
      </CartListStyle>
    </>
  );
};
