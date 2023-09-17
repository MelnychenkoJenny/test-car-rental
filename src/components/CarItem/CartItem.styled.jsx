import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;
  //   flex-basis: calc((100% - 87px) / 5);
  height: 426px;
  border-radius: 12px;
  transition: box-shadow 300ms
      ${({ theme: { transition } }) => transition.timingFunction},
    scale 300ms ${({ theme: { transition } }) => transition.timingFunction};

  &:hover {
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
    scale: 1.04;
  }
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  width: 20px;
  height: 20px;
  display: flex;
  background-color: transparent;
  border: transparent;
  padding: 0;
  justify-content: center;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
    fill: transparent;
    opacity: 90%;
    stroke: ${({ theme: { colors } }) => colors.white};
    transition: fill 300ms
    ${({ theme: { transition } }) => transition.timingFunction}, stroke 300ms
    ${({ theme: { transition } }) => transition.timingFunction}, scale 300ms
    ${({ theme: { transition } }) => transition.timingFunction};
    &:hover {
      fill: ${({ theme: { colors } }) => colors.accentLight};
      stroke: ${({ theme: { colors } }) => colors.accentLight};
      scale: 1.5;
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
`;

export const NameCarModal = styled(NameCar)`
  font-size: 18px;
`;

export const Price = styled(NameCar)``;

export const NameAccent = styled.span`
  color: ${({ theme: { colors } }) => colors.accentLight};
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoListSecond = styled(InfoList)`
  margin-top: 4px;
`;

export const InfoListSecModal = styled(InfoListSecond)`
  margin-bottom: 14px;
`;

export const InfoListModal = styled(InfoListSecond)`
  margin-bottom: 24px;
`;

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
`;

export const BtnLearnMore = styled.button`
  width: 274px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 28px;
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

export const Description = styled.p`
  margin-bottom: 24px;
  text-align: justify;
`;

export const TextModal = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ConditionsItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  font-size: 12px;
  line-height: 1.5;
  background-color: ${({ theme: { colors } }) => colors.bgElements};
`;

export const Accent = styled.span`
  color: ${({ theme: { colors } }) => colors.accentLight};
  font-weight: 600;
  letter-spacing: -0.24px;
`;

export const ModalScrollWrap = styled.div`
  max-width: 446px;
  height: 200px;
  padding-right: 15px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px; /* Ширина скрола */
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme: { colors } }) => colors.secondaryTextLight};
    border-radius: 15px; /* Фон треку скрола */
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { colors } }) =>
      colors.accentLight}; /* Колір пальця скрола (перетягуючої частини) */
    border-radius: 15px; /* Закруглені кути пальця скрола */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme: { colors } }) =>
      colors.accentDark}; /* Колір пальця скрола при наведенні */
  }
`;

export const RentalPhone = styled.a`
  display: flex;
  margin-top: 24px;
  width: 168px;
  height: 44px;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.accentLight};
  transition: background-color 300ms
    ${({ theme: { transition } }) => transition.timingFunction};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.accentDark};
  }
`;
