import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;
  flex-basis: calc((100% - 87px) / 5);
  height: 426px;
  border-radius: 12px;
  transition: box-shadow 300ms
    ${({ theme: { transition } }) => transition.timingFunction}, scale 300ms
    ${({ theme: { transition } }) => transition.timingFunction};

  &:hover {
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  scale: 1.04;
  }

  svg {
    position: absolute;
    right: 14px;
    top: 14px;
    width: 18px;
    height: 18px;
    fill: transparent;
   opacity: 90%;
    stroke: ${({ theme: { colors } }) => colors.white};
    
  }

`;

export const Image = styled.img`
  margin-bottom: 14px;
  object-fit: cover;
  object-position: center;
  border-radius: 14px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const NameCar = styled.div`
font-size: 16px;
font-weight: 500;
line-height: 1.5;
`

export const Price = styled(NameCar)`
`

export const NameAccent = styled.span`
color: ${({ theme: { colors } }) => colors.accentLight};
`

export const InfoList = styled.ul`
display: flex;
flex-wrap: wrap;
margin-bottom: 4px;
`

export const InfoItem = styled.li`
font-size: 12px;
font-weight: 400;
line-height: 1.5;
color: ${({ theme: { colors } }) => colors.secondaryText};
&:not(:last-child) {
    border-right: 2px solid ${({ theme: { colors } }) => colors.line};
    padding-right: 6px;
}
&:not(:first-child) {
    padding-left: 6px;
}
`

export const BtnLearnMore = styled.button`
  width: 274px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 28px;
  font-size: 14px;
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
