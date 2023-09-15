import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const ContainerMain = styled(Container)`
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-bottom: 30px;
  max-width: 1250px;
  // @media screen and (min-width: 760px) {
  //   max-width: 760px;
  // }
  // @media screen and (min-width: 1280px) {
  //   max-width: 1280px;
  // }
`;
export const Header = styled.header`
  background: linear-gradient(
    to top,
    ${({ theme: { colors } }) => colors.white},
    ${({ theme: { colors } }) => colors.bgHeader}
  );
`;
export const NavLinkStyles = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.primaryText};
  &.active {
    color: ${({ theme: { colors } }) => colors.accentDark};
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  font-size: 35px;
  text-align: center;
  // @media screen and (min-width: 760px) {
  //   gap: 80px;
  // }
  // @media screen and (min-width: 1200px) {
  //   gap: 150px;
  // }
`;

export const NavItem = styled.li`
font-weight: 600;
  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.2;
  }
`;
