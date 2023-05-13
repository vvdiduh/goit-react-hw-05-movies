import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { getTrending } from '../../api/api';
import MoviesList from '../MoviesList/MoviesList';

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    let cancelled = false;
    getTrending()
      .then(data => !cancelled && setTrending(data))
      .catch(() => Notify.failure('Something went wrong!'));

    return () => {
      cancelled = true;
    };
  }, []);

  return <MoviesList movies={trending} />;
};

export default Trending;
