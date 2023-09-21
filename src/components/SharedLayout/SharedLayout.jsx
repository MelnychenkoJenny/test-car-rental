import { Error } from 'components/Error';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Loading } from 'components/Loading';
import { useCars } from 'hooks';
import { Suspense } from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import { CatalogHeader, HeaderStyle, FooterStyle, CatalogFooter } from './SharedLayout.styled';


export const SharedLayout = () => {
  const { error } = useCars();
  const {pathname: currentPath} = useLocation();
console.log('currentPath :>> ', currentPath);
  return (
    <>
      {currentPath === '/' ? (
        <HeaderStyle>
          <Header/>
        </HeaderStyle>
      ) : (
        <CatalogHeader>
          <Header/>
        </CatalogHeader>
      )}
      <Suspense fallback={<Loading />}>
        <main>
          {error ? (
            <Error error={error} />
          ) : (
            <div>
              <Outlet />
            </div>
          )}
        </main>
      </Suspense>
      {currentPath === '/' ? (
        <FooterStyle>
        <Footer/>
      </FooterStyle>
      ) : (
        <CatalogFooter>
        <Footer/>
      </CatalogFooter>
      )}
      
    </>
  );
};
