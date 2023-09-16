import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.backdrop};
  z-index: 100;
`;

export const ModalContent = styled.div`
  max-width: 541px;
  max-height: 752px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 24px;
`;

export const BtnClose = styled.button`
position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: transparent;
  background-color: transparent;
  svg {
    stroke: ${({ theme: { colors } }) => colors.primaryText};
    transition: stroke 300ms ${({ theme: { transition } }) => transition.timingFunction};
    &:hover {
       stroke: ${({ theme: { colors } }) => colors.accentDark};
    }
  }
`