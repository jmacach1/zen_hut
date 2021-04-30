import React from 'react';
import styles from './logo.module.scss';

function Logo() {
  return (
    <div className={styles.title}>
      <div className={styles.sprout_icon} >
        <img src="/sprout.svg" alt="sprout"/>
      </div>
      <div className={styles.title_text}>
        <h1>Zen Table</h1>
      </div>
    </div>
  );
}

export default Logo;