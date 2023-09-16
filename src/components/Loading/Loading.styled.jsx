import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

export const LoadingStyle = styled.div`
  margin: 60px auto;
  width: 80px;
  height: 80px;
  border: 4px solid ${({ theme: { colors } }) => colors.primaryText};
  border-top: 4px solid ${({ theme: { colors } }) => colors.accentLight};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingWrap = styled.div`
height: 100vh;
padding-top: 230px;
`
