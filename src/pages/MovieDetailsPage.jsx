import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDetails } from 'hooks/useDetails';
import { BackLink } from 'components/BackLink';
import { Container, Wrapper } from './details.styled';
import Loader from 'components/Loader/Loader';

import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movie } = useDetails(movieId);
  const location = useLocation();
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const backLinkHref = location.state?.from ?? '/movies';

  if (!movie) return <Loader />;

  return (
    <div>
      <BackLink to={backLinkHref}>Back to movie list</BackLink>
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
          <button onClick={e => setShowCast(true)}>Cast</button>
          {showCast && <Cast />}
        </li>
        <li>
          <button onClick={e => setShowReviews(true)}>Reviews</button>

          {showReviews && <Reviews />}
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
