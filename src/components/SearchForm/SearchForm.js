import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './searchForm.module.css';
import { Notify } from 'notiflix';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = ({ target }) => setQuery(target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      Notify.failure('Empty query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" value={query} onChange={onChange} />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;