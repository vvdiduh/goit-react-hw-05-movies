import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './moviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {movies.map(({ title, id }) => (
          <li key={id} className={styles.item}>
            <Link className={styles.link} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default MoviesList;
