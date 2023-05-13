import { lazy } from 'react';

const MovieDetailsView = lazy(() =>
  import('../views/movieDetails/MovieDetailsView' /* webpackChunkName: "MovieDetailsView" */),
);

const moviesRoutes = [{ path: '/movies/:movieId/*', name: null, component: MovieDetailsView }];

export default moviesRoutes;
