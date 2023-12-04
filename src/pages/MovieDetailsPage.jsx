import { Outlet } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useDetails } from 'hooks/useDetails';
import { BackLink } from 'components/BackLink';
import { Container, Wrapper } from './details.styled';
import Loader from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movie } = useDetails(movieId);
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/');

  if (!movie) return <Loader />;

  return (
    <div>
      <BackLink to={backLinkHref.current}>Back to movie list</BackLink>
      <Container>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
          }
          alt={`${movie.title}`}
          width="240"
        />
        <Wrapper>
          <h2>
            {movie.title}, {movie.release_date.slice(0, 4)}
          </h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genre</h3>
          {`${movie.genres.map(genre => genre.name).join(' / ')}`}
        </Wrapper>
      </Container>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
