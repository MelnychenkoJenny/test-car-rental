
import {
  CountryText,
  HomeItem,
  HomeList,
  HomeWrap,
  LinkRental,
  MainTitle,
} from './Home.styled';

const Home = () => {
  return (
    <HomeWrap>
      <MainTitle>Car rental in Ukraine</MainTitle>
      <CountryText>Kyiv, Lviv, Dnipro, Odesa, Kharkiv, Vinnytsia</CountryText>
      <HomeList>
        <HomeItem>
          <span>137 new cars in the fleet</span>
        </HomeItem>
        <HomeItem>
          <span>Full insurance (CASCO, OSAGO)</span>
        </HomeItem>
        <HomeItem>
          <span>Car delivery to the address</span>
        </HomeItem>
        <HomeItem>
          <span>Car transfer takes up to 8 minutes</span>
        </HomeItem>
        <HomeItem>
          <span>It is possible to go abroad</span>
        </HomeItem>
        <HomeItem>
          <span>24/7 support</span>
        </HomeItem>
      </HomeList>
      <LinkRental to="catalog">Get rental car</LinkRental>
    </HomeWrap>
  );
};

export default Home;
