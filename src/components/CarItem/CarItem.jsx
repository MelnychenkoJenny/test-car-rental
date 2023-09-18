import {
  Accent,
  BtnLearnMore,
  ConditionsItem,
  ConditionsList,
  Description,
  FavoriteBtn,
  Image,
  InfoItem,
  InfoList,
  InfoListModal,
  InfoListSecModal,
  InfoListSecond,
  ListItem,
  ModalScrollWrap,
  NameAccent,
  NameCar,
  NameCarModal,
  Price,
  RentalPhone,
  TextModal,
  TitleWrap,
} from './CartItem.styled';

import icon from 'images/heart.svg';
import iconFill from 'images/heartFill.svg';
import { useCars } from 'hooks';
import { useDispatch } from 'react-redux';
import {
  addToFavorite,
  removeFromFavorite,
} from 'redux/favorite/favoriteSlice';
import { Modal } from 'components/Modal';
import { useState } from 'react';

export const CarItem = ({ dataCar }) => {
  const [showModal, setShowModal] = useState(false);

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
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    mileage,
  } = dataCar;
  const location = address.split(',');
  const country = location[2];
  const city = location[1];
  const feature = accessories[2];
  const conditions = rentalConditions.split('\n');
  const age = conditions[0].match(/\d+/);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFavorite = dataCar => {
    if (!favorite.some(car => car.id === dataCar.id)) {
      dispatch(addToFavorite(dataCar));
    } else {
      dispatch(removeFromFavorite(dataCar));
    }
  };

  return (
    <>
      <ListItem key={img + '333'}>
        <FavoriteBtn
          type="button"
          onClick={() => handleFavorite(dataCar)}
          aria-label="Add to Favorites"
        >
          {favorite.some(car => car.id === dataCar.id) ? (
            <svg>
              <use href={iconFill + '#heart-fill'}></use>
            </svg>
          ) : (
            <svg>
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
        <InfoListSecond>
          <InfoItem>{type}</InfoItem>
          <InfoItem>{make}</InfoItem>
          <InfoItem>{id}</InfoItem>
          <InfoItem>{feature}</InfoItem>
        </InfoListSecond>
        <BtnLearnMore
          type="button"
          onClick={openModal}
          aria-label="View full car information"
        >
          Learn more
        </BtnLearnMore>
      </ListItem>
      {showModal && (
        <Modal onClose={closeModal}>
          <Image src={img} alt={`${make} ${model}`} width="461" height="248" />
          <TitleWrap>
            <NameCarModal>
              {make}
              <NameAccent> {model}</NameAccent>, {year}
            </NameCarModal>
          </TitleWrap>
          <ModalScrollWrap>
            <InfoList>
              <InfoItem>{city}</InfoItem>
              <InfoItem>{country}</InfoItem>
              <InfoItem>Id: {id}</InfoItem>
              <InfoItem>Year: {year}</InfoItem>
              <InfoItem>{type}</InfoItem>
            </InfoList>
            <InfoListSecModal>
              <InfoItem>Fuel consumption: {fuelConsumption}</InfoItem>
              <InfoItem>Engine size: {engineSize}</InfoItem>
            </InfoListSecModal>

            <Description>{description}</Description>
            <TextModal>Accessories and functionalities:</TextModal>
            <InfoList>
              {accessories.map(el => (
                <InfoItem key={el}>{el}</InfoItem>
              ))}
            </InfoList>
            <InfoListModal>
              {functionalities.map(el => (
                <InfoItem key={el}>{el}</InfoItem>
              ))}
            </InfoListModal>
            <TextModal> Rental Conditions:</TextModal>
            <ConditionsList>
              <ConditionsItem>
                Minimum age: <Accent>{age[0]}</Accent>
              </ConditionsItem>
              <ConditionsItem>{conditions[1]}</ConditionsItem>
              <ConditionsItem>{conditions[2]}</ConditionsItem>
              <ConditionsItem>
                Mileage: <Accent>{mileage.toLocaleString()}</Accent>
              </ConditionsItem>
              <ConditionsItem>
                Price: <Accent>{rentalPrice}</Accent>
              </ConditionsItem>
            </ConditionsList>
          </ModalScrollWrap>
          <RentalPhone href="tel:+380730000000">Rental car</RentalPhone>
        </Modal>
      )}
    </>
  );
};
