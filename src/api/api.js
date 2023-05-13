import axios from 'axios';
import { API_KEY, BASE_URL } from './constants';
import { getListData } from './helpers';

const _axios = axios.create({ baseURL: BASE_URL });

export const getTrending = () =>
  _axios.get(`/trending/movie/week?api_key=${API_KEY}&limit=20`).then(getListData);

export const getMoviesByQuery = query =>
  _axios.get(`/search/movie?api_key=${API_KEY}&limit=20&query=${query}`).then(getListData);

export const getMovieDetails = id =>
  _axios
    .get(`/movie/${id}?api_key=${API_KEY}`)
    .then(res => res.data)
    .then(({ title, poster_path, vote_average, overview, genres }) => ({
      title,
      poster_path,
      vote_average,
      overview,
      genres,
    }));

export const getCastInfo = id =>
  _axios.get(`/movie/${id}/credits?api_key=${API_KEY}`).then(res =>
    res.data.cast.map(({ id, profile_path, original_name, character }) => ({
      id,
      profile_path,
      original_name,
      character,
    })),
  );

export const getReviewsInfo = id =>
  _axios
    .get(`movie/${id}/reviews?api_key=${API_KEY}`)
    .then(res => res.data.results.map(({ id, author, content }) => ({ id, author, content })));
