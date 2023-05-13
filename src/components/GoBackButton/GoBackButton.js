import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QueryContext } from '../App';
import styles from './goBackButtton.module.css';

const GoBackButton = () => {
  const navigate = useNavigate();
  const { query } = useContext(QueryContext);

  const goBack = () => (query ? navigate('/movies') : navigate('/'));

  return (
    <button className={styles.button} type="button" onClick={goBack}>
      Go back
    </button>
  );
};

export default GoBackButton;
