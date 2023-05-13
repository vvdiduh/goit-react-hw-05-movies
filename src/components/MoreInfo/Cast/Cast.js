import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './cast.module.css';
import notFound from '../../../images/notFound.png';

const Cast = ({ cast }) => {
  return (
    <section>
      <ul className={styles.list}>
        {cast.map(({ id, profile_path, original_name, character }) => (
          <li className={styles.item} key={id}>
            <img
              className={styles.image}
              src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : notFound}
              alt="avatar"
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      original_name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ),
};

export default Cast;
