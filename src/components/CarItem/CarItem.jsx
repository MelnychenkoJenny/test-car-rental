import { BtnLearnMore, FavoriteBtn, Image, InfoItem, InfoList, ListItem, NameAccent, NameCar, Price, TitleWrap } from "./CartItem.styled";

import icon from 'images/heart-icon.svg'
// import { useState } from "react";

export const CarItem = ({dataCar}) => {
    const {id, img, make, model, year, rentalPrice, address, rentalCompany, type, accessories} = dataCar;
const location = address.split(',')
const country = location[2];
const city = location[1]
const feature = accessories[2]
// const [favorite, setFavorite] = useState([])
// console.log('favorite :>> ', favorite);
const handleFavorite = (dataCar) => {
    // const isItFavorite = favorite.find((({id})=>id===dataCar.id))
    // console.log('dataCar :>> ', dataCar);
    // setFavorite(prev=>[...prev, ...dataCar])
}


    return (
        <ListItem>
            <FavoriteBtn type='button' onClick={()=> handleFavorite(dataCar)}>
                <svg>
                    <use href={icon + '#heart'}></use>
                </svg>
            </FavoriteBtn>
            <Image src={img} alt={`${make} ${model}`} width='274' height='268'/>
            <TitleWrap>
                <NameCar>{make}
                <NameAccent> {model}</NameAccent>, {year}</NameCar>
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
            <BtnLearnMore type='button'>Learn more</BtnLearnMore>
           </ListItem>
    )
}
