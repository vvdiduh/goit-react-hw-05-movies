import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './loader.module.css';

const Loader = () => (
  <div className={styles.mainWrapper}>
    <div className={styles.wrapper}>
      <Oval color="orange" width={80} height={80} />
    </div>
  </div>
);

export default Loader;