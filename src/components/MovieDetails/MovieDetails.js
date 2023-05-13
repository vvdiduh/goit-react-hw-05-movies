import React from 'react';
import Title from '../Title';
import { PropTypes } from 'prop-types';
import styles from './movieDetails.module.css';

const MovieDetails = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <section className={styles.section}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="poster"
      />
      <div className={styles.desc}>
        <Title title={title} />
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={styles.genresList}>
          {genres.map(({ id, name }) => (
            <li key={id} className={styles.genresItem}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }),
};

export default MovieDetails;