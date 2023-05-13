import { Notify } from 'notiflix';
import React, { useContext, useEffect, useState } from 'react';
import { getMoviesByQuery } from '../api/api';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
// import { QueryContext } from './Components/App';
import { QueryContext } from 'components/App';

const MoviesView = () => {
  const [movies, setMovies] = useState([]);

  const { query, setQuery } = useContext(QueryContext);
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (search.includes('query')) {
      setQuery(qs.parse(search.replace('?', '')).query);
      return;
    }
    setQuery('');
  }, [search]);

  useEffect(() => {
    let cancelled = false;

    !query && setMovies([]);

    if (query) {
      navigate(`${pathname}?query=${query}`);
      getMoviesByQuery(query)
        .then(data => !cancelled && setMovies(data))
        .catch(() => Notify.failure('Something went wrong!'));
    }
    return () => {
      cancelled = true;
    };
  }, [query]);

  const onSubmit = query => setQuery(query);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesView;