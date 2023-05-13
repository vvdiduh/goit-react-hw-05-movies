import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

const getClassName = ({ isActive }) =>
  isActive
    ? classNames(styles.navLink, styles.navLinkActive)
    : classNames(styles.navLink, styles.navLinkNotActive);

const Navigation = ({ routes }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {routes.map(({ path, name }) => (
          <li className={styles.navItem} key={path}>
            <NavLink to={path} className={getClassName}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default Navigation;
