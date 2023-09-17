import { Error } from 'components/Error';
import { Footer } from 'components/Footer';
import {Loading} from 'components/Loading';
import { useCars } from 'hooks';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  NavItem,
  NavLinkStyles,
  NavList,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const {
    error,
  } = useCars();
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
          {error ? <Error error={error}/> : <div>
            <Outlet />
          </div>}
        </main>
      </Suspense>
      <Footer/>
    </>
  );
};