import {
  BtnLearnMore,
  FavoriteBtn,
  Image,
  InfoItem,
  InfoList,
  ListItem,
  NameAccent,
  NameCar,
  Price,
  TitleWrap,
} from './CartItem.styled';

import icon from 'images/heart.svg';
import iconFill from 'images/heartFill.svg';
// import { useState } from "react";
import { useCars } from 'hooks';
import { useDispatch } from 'react-redux';
import {
  addToFavorite,
  removeFromFavorite,
} from 'redux/favorite/favoriteSlice';

export const CarItem = ({ dataCar }) => {
  const { favorite } = useCars();
  const dispatch = useDispatch();
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,
  } = dataCar;
  const location = address.split(',');
  const country = location[2];
  const city = location[1];
  const feature = accessories[2];
  // const [favorite, setFavorite] = useState([])
  console.log('favorite :>> ', favorite);

  const handleFavorite = dataCar => {
    if (!favorite.some(car => car.id === dataCar.id)) {
      dispatch(addToFavorite(dataCar)); // Додати до улюблених, якщо ще не у списку
    } else {
      dispatch(removeFromFavorite(dataCar)); // Видалити зі списку улюблених, якщо вже там
    }
  };

  return (
    <ListItem>
      <FavoriteBtn type="button" onClick={() => handleFavorite(dataCar)}>
        {favorite.some(car => car.id === dataCar.id) ? (
           <svg>
           <use href={iconFill + '#heart-fill'}></use>
         </svg>
        ) : (<svg>
            <use href={icon + '#heart'}></use>
          </svg>
         
        )}
      </FavoriteBtn>
      <Image src={img} alt={`${make} ${model}`} width="274" height="268" />
      <TitleWrap>
        <NameCar>
          {make}
          <NameAccent> {model}</NameAccent>, {year}
        </NameCar>
        <Price>{rentalPrice}</Price>
      </TitleWrap>
      <InfoList>
        <InfoItem>{city}</InfoItem>
        <InfoItem>{country}</InfoItem>
        <InfoItem>{rentalCompany}</InfoItem>
      </InfoList>
      <InfoList>
        <InfoItem>{type}</InfoItem>
        <InfoItem>{make}</InfoItem>
        <InfoItem>{id}</InfoItem>
        <InfoItem>{feature}</InfoItem>
      </InfoList>
      <BtnLearnMore type="button">Learn more</BtnLearnMore>
    </ListItem>
  );
};
