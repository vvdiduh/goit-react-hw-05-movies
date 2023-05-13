import { lazy } from 'react';

const HomeView = lazy(() => import('../views/HomeView' /* webpackChunkName: "HomeView" */));
const MoviesView = lazy(() => import('../views/MoviesView' /* webpackChunkName: "MoviesView" */));

const mainRoutes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/movies', name: 'Movies', component: MoviesView },
];

export default mainRoutes;
