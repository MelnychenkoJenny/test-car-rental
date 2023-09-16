import { Footer } from 'components/Footer';
import {Loading} from 'components/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  ContainerMain,
  Header,
  NavItem,
  NavLinkStyles,
  NavList,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
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
      </Header>
      <Suspense fallback={<Loading />}>
        <main>
          <ContainerMain>
            <Outlet />
          </ContainerMain>
        </main>
      </Suspense>
      <Footer/>
    </>
  );
};
