import { CarItem } from 'components/CarItem';
import { CartListStyle } from 'components/CarList/CartList.styled';
import { useCars } from 'hooks';

const Favorites = () => {

const { favorite } = useCars();
console.log(favorite, 45641561);
    return(
        <>
        <CartListStyle>
          {favorite.map(car => (
           <CarItem dataCar={car} key={car.id} />
          ))}
        </CartListStyle>
    </>
    )
    }
    
    export default Favorites;