import styled from 'styled-components';
import image1 from 'images/milos-car-rentals-1280.jpg';

export const ContainerEmptyFavorite = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${image1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: calc(100vh - (95px + 84px));
`;

export const EmptyFavoriteText = styled.p`
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
   @media screen and (min-width: 760px) {
    padding-top: 150px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 220px;
  }
`;
