import styled from 'styled-components';

export const BtnMore = styled.button`
  background-color: transparent;
  border: transparent;
  margin: 0 auto;
  display: flex;
  color: ${({ theme: { colors } }) => colors.accentLight};
  text-decoration: underline;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  transition: color 300ms
      ${({ theme: { transition } }) => transition.timingFunction},
    scale 300ms ${({ theme: { transition } }) => transition.timingFunction};

  &:hover {
    color: ${({ theme: { colors } }) => colors.accentDark};
    scale: 1.2;
  }
`;
