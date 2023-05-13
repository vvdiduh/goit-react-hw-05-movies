import React from 'react';
import Navigation from '../Navigation';
import mainRoutes from '../../routes/mainRoutes';

const Header = () => {
  return (
    <header>
      <Navigation routes={mainRoutes} />
    </header>
  );
};

export default Header;
