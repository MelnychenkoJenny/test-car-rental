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
  padding-top: 20px;
  padding-bottom: 30px;
  max-width: 1440px;
`;

export const HeaderStyle = styled.header`
  background: linear-gradient(
    to top,
    ${({ theme: { colors } }) => colors.bgHeaderHome},
    ${({ theme: { colors } }) => colors.bgHeader}
  );
`;

export const CatalogHeader = styled.header`
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
  text-align: center;
`;

export const NavItem = styled.li`
  font-size: 16px;
  font-weight: 600;
  @media screen and (min-width: 760px) {
    font-size: 24px;
  }

  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.2;
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
    ${({ theme: { colors } }) => colors.bgFooterHome},
    ${({ theme: { colors } }) => colors.bgHeader}
  );
`;

export const CatalogFooter = styled.footer`
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
