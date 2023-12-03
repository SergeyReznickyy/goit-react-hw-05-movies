import { SearchBox } from 'components/SearchBox/SearchBox';
import Movies from 'components/Movies';
import { useQuery } from '../hooks/useQuery';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const query = searchParams.get('query') ?? '';
  const { movies } = useQuery(query);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const visibleListOfMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBox onChange={updateQueryString} />
      <Movies movies={visibleListOfMovies} />
    </div>
  );
};

export default MoviesPage;
