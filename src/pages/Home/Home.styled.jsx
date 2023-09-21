import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import image from 'images/home1300.jpg';

const slideInLeft = keyframes`
 to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: calc(100vh - 168px);

  justify-content: space-evenly;
  margin: 0px;
  padding: 30px 0px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${image});
  background-position: right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media screen and (min-width: 760px) {
    min-height: calc(100vh - (95px + 84px));
  }
`;

export const MainTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.mainTitle};
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 1px 0px ${({ theme: { colors } }) => colors.textShadow},
    1px 2px 0px ${({ theme: { colors } }) => colors.textShadow},
    1px 3px 0px ${({ theme: { colors } }) => colors.textShadow},
    1px 4px 0px ${({ theme: { colors } }) => colors.textShadow},
    1px 5px 0px ${({ theme: { colors } }) => colors.textShadow},
    1px 6px 0px ${({ theme: { colors } }) => colors.textShadow},
    1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4),
    1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2);

  @media screen and (min-width: 760px) {
    font-size: 60px;
  }
`;

export const CountryText = styled.p`
  font-size: 18px;
  text-shadow: 2px 2px 3px ${({ theme: { colors } }) => colors.textShadowHome};
  font-weight: 600;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.accentDark};
  @media screen and (min-width: 760px) {
    font-size: 28px;
  }
`;

export const HomeList = styled.ul`
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  max-width: 700px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  // padding-bottom: 210px;
`;
export const HomeItem = styled.li`
  margin: 4px 0;
  position: relative;
  font-weight: 600;
  font-size: 14px;
  left: 0;
  background-color: ${({ theme: { colors } }) => colors.featureHome};
  border-left: 2px solid ${({ theme: { colors } }) => colors.mainTitle};
  transition: 0.5s;
  transform: translateX(-50px);
  animation: ${slideInLeft} 0.5s forwards ease-out;
  cursor: pointer;
  opacity: 0;

  &:hover {
    left: 10px;
  }

  span {
    position: relative;
    padding: 8px;
    padding-left: 12px;
    display: inline-block;
    z-index: 1;
    transition: 0.5s;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme: { colors } }) => colors.mainTitle};
    transform: scaleX(0);
    transform-origin: left;
    transition: 0.5s;
  }
  &:hover:before {
    transform: scaleX(1);
  }

  @media screen and (min-width: 760px) {
    font-size: 16px;
  }
`;

export const LinkRental = styled(Link)`
  width: 274px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto /*30px*/;
  font-weight: 600;
  line-height: 1.43;
  border-radius: 12px;
  border: transparent;
  background-color: ${({ theme: { colors } }) => colors.accentLight};
  color: ${({ theme: { colors } }) => colors.white};
  transition: background-color 300ms
    ${({ theme: { transition } }) => transition.timingFunction};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.accentDark};
  }
`;
