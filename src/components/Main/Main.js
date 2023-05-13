import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import moviesRoutes from '../../routes/moviesRoutes';
import NotFoundView from '../../views/NotFoundView';
import styles from './main.module.css';
import Loader from '../Loader';

const Main = () => {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loader />}>
        <Routes>
          {mainRoutes.map(({ path, component: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          {moviesRoutes.map(({ path, component: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;