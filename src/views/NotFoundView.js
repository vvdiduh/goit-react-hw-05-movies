import { Notify } from 'notiflix';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const NotFoundView = () => {
  useEffect(() => {
    Notify.failure('Page haven`t been found, you were redireced to Home page!');
  }, []);

  return <Navigate to="/" />;
};

export default NotFoundView;
