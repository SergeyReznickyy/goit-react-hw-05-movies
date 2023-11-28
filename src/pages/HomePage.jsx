import { useTrending } from 'hooks/useTrending';
import { useLocation } from 'react-router-dom';
import { Container, Wrapper, Image, StyledLink, Header } from './home.styled';

const HomePage = () => {
  const location = useLocation();
  const { trendingMovies } = useTrending();

  return (
    <main>
      <Container>
        {trendingMovies.map(movie => (
          <Wrapper key={movie.id}>
            <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.title}`}
                width="280"
              ></Image>
              <p>{movie.title} </p>
            </StyledLink>
          </Wrapper>
        ))}
      </Container>
    </main>
  );
};

export default HomePage;
