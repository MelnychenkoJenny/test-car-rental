import {
  CountryText,
  HomeItem,
  HomeList,
  HomeWrap,
  MainTitle,
} from './Home.styled';

const Home = () => {
  return (
    <HomeWrap>
      <MainTitle>Dayly rental of cars in Ukraine</MainTitle>
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
    </HomeWrap>
  );
};

export default Home;
