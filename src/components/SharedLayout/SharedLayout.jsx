import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Link,
  Header,
} from 'components/SharedLayout/SharedLayout.styled';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
