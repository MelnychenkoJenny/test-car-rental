import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const heartbeat = keyframes`
0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.25);
  }
  40% {
    transform: scale(1.5);
  }
`;

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px 15px;
  background: linear-gradient(
    to bottom,
    ${({ theme: { colors } }) => colors.white},
    ${({ theme: { colors } }) => colors.bgHeader}
  );
`;

export const HeartIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  opacity: 90%;
  stroke: ${({ theme: { colors } }) => colors.white};
  animation: ${heartbeat} 1s infinite;
`;

export const FooterText = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const Social = styled(Link)`
  svg {
    width: 20px;
    height: 20px;
    transition: scale 300ms ${({ theme: { transition } }) => transition.timingFunction};
  }
  transition: scale 300ms ${({ theme: { transition } }) => transition.timingFunction};
  :hover svg {
    scale: 1.3;
  }
`;
