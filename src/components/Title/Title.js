import { PropTypes } from 'prop-types';
import React from 'react';
import styles from './title.module.css';

const Title = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;