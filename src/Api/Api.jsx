import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const API_KEY = '171cb119fb2bebf41fcc8130ecf25138';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false&page=1`
  );
  return response.data;
};

export const getMovieId = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=171cb119fb2bebf41fcc8130ecf25138&language=en-US`
  );
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=171cb119fb2bebf41fcc8130ecf25138&language=en-US&page=1`
  );
  return response.data;
};
