import React, { useContext, useEffect } from 'react';
import { QueryContext } from 'components/App';
import Title from 'components/Title/Title';
import Trending from 'components/Trending/Trending';

const HomeView = () => {
  const { setQuery } = useContext(QueryContext);

  useEffect(() => {
    setQuery('');
  }, []);

  return (
    <>
      <Title title="Trending today" />
      <Trending />
    </>
  );
};

export default HomeView;
