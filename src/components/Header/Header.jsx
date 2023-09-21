import {
  Container,
  NavItem,
  NavLinkStyles,
  NavList,
} from 'components/SharedLayout/SharedLayout.styled';

export const Header = () => {
  return (
    <Container>
      <nav>
        <NavList>
          <NavItem>
            <NavLinkStyles to="/" end>
              Home
            </NavLinkStyles>
          </NavItem>
          <NavItem>
            <NavLinkStyles to="catalog">Catalog</NavLinkStyles>
          </NavItem>
          <NavItem>
            <NavLinkStyles to="favorites">Favorites</NavLinkStyles>
          </NavItem>
        </NavList>
      </nav>
    </Container>
  );
};
