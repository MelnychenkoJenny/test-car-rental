import { Container } from 'components/SharedLayout/SharedLayout.styled';
import styled from 'styled-components';

export const ContainerError = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  height: 535px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
`;

export const ContainerFilterEmpty = styled(ContainerError)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  height: 390px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
`;

export const TextError = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;
