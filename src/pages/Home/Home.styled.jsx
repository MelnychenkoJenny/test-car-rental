import styled, { keyframes } from 'styled-components';
import image from 'images/home-cars.png';

const slideInLeft = keyframes`
 to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HomeWrap = styled.div`
  margin: 0px;
  padding: 30px 0px;
  background-image: url(${image});
  background-size: 1100px;
  background-position: center 310px;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const MainTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 60px;
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
`;

export const CountryText = styled.p`
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.accentDark};
`;

export const HomeList = styled.ul`
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  padding-bottom: 290px;
`;
export const HomeItem = styled.li`
  margin: 4px 0;
  position: relative;
  font-weight: 600;
  font-size: 16px;
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
`;
