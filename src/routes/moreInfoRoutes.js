import { lazy } from 'react';

const CastView = lazy(() =>
  import('../views/movieDetails/CastView' /* webpackChunkName: "CastView" */),
);
const ReviewView = lazy(() =>
  import('../views/movieDetails/ReviewView' /* webpackChunkName: "ReviewView" */),
);

const moreInfoRoutes = [
  { path: `cast`, name: 'Cast', component: CastView },
  { path: `reviews`, name: 'Reviews', component: ReviewView },
];

export default moreInfoRoutes;
