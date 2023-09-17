import styled from 'styled-components';

export const FormFilter = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
  padding-bottom: 50px;
`;

export const LabelFilter = styled.label`
  display: flex;
  margin-bottom: 8px;
  color: ${({ theme: { colors } }) => colors.label};
  font-weight: 500;
  line-height: 1.29;
`;

export const Select = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 224px;
  height: 48px;
  border-radius: 14px;
  padding: 14px 18px 14px 18px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border: transparent;
  appearance: none;
  background-color: ${({ theme: { colors } }) => colors.bgInput};
  outline: transparent;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
  }
`;

export const SelectPrice = styled(Select)`
  width: 125px;
`;

export const DropDown = styled.div`
position: absolute;
top: 52px;
left: 0;
z-index: 10;
width: 224px;
height: 272px;
background-color: white;
border-radius: 14px;
border: 1px solid rgba(18, 20, 23, 0.05);
padding: 14px 8px 14px 18px;
}
`;

export const DropDownPrice = styled(DropDown)`
  width: 125px;
  height: 188px;
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    position: absolute;
    right: 50px;
    width: 8px; /* Ширина скрола */
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme: { colors } }) => colors.white};
    border-radius: 10px; /* Фон треку скрола */
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { colors } }) =>
      colors.scroll}; /* Колір пальця скрола (перетягуючої частини) */
    border-radius: 10px; /* Закруглені кути пальця скрола */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme: { colors } }) =>
      colors.accentLight}; /* Колір пальця скрола при наведенні */
  }
`;

export const DropdownListPrice = styled(DropdownList)``;

export const DropdownItem = styled.li`
  color: ${({ theme: { colors } }) => colors.secondaryTextLight};
  cursor: pointer;
  transition: color 300ms
    ${({ theme: { transition } }) => transition.timingFunction};
  &:hover {
    color: ${({ theme: { colors } }) => colors.primaryText};
  }
`;

export const InputFrom = styled.input`
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.bgInput};
  padding: 14px 24px 14px 75px;
  border-color: ${({ theme: { colors } }) => colors.borderInput};
  border-radius: 14px 0px 0px 14px;
  border: transparent;
  border-right-style: solid;
  border-right-width: 1px;
  height: 48px;
  max-width: 160px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  outline: transparent;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const InputTo = styled.input`
  background-color: ${({ theme: { colors } }) => colors.bgInput};
  border-color: ${({ theme: { colors } }) => colors.borderInput};
  padding: 14px 24px 14px 55px;
  border-radius: 0px 14px 14px 0px;
  border-right: transparent;
  border-top: transparent;
  border-bottom: transparent;
  height: 48px;
  left: 160px;
  width: 160px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  outline: transparent;
`;

export const LabelMileage = styled.label`
  position: absolute;
  left: 24px;
  top: 14px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const ButtonFilter = styled.button`
  width: 136px;
  height: 48px;
  font-weight: 600;
  line-height: 1.43;
  color: ${({ theme: { colors } }) => colors.white};
  border-radius: 12px;
  background: ${({ theme: { colors } }) => colors.accentLight};
  border: transparent;
  transition: background-color 300ms
    ${({ theme: { transition } }) => transition.timingFunction};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.accentDark};
  }
`;
